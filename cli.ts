import yargs from 'yargs';
import * as contentful from 'contentful-management';
import fs from 'fs-extra';
import os from 'os';
import path from 'path';
import { Record, String, Static } from 'runtypes';
import packageJson from './package.json';

const ContentfulConfig = Record({
    cmaToken: String,
});

type ContentfulConfig = Static<typeof ContentfulConfig>;

async function getContentfulConfig(): Promise<ContentfulConfig> {
    const json = await fs.readJson(path.join(os.homedir(), '.contentfulrc.json'));

    return ContentfulConfig.check(json);
}

yargs.version(false).command('install', 'install the extension', yargs => {
    return yargs.positional('version', {
        describe: 'the version or npm channel to install',
        default: 'latest',
        type: 'string',
    }).option('access-token', {
        describe: 'your contentful access token. If not supplied, this will be looked up from ~/.contentfulrc.json',
        type: 'string',
    }).option('space-id', {
        describe: 'your contentful space id',
        demandOption: true,
        type: 'string',
    }).option('environment', {
        default: 'master'
    });
}, async argv => {
    const accessToken = argv["access-token"] || (await getContentfulConfig()).cmaToken;

    const client = contentful.createClient({
        accessToken,
    });

    const space = await client.getSpace(argv["space-id"]);

    const environment = await space.getEnvironment(argv.environment);

    await environment.createUiExtension({
        extension: {
            fieldTypes: [{ type:"Object" }],
            name: "JSON Schema",
            src: `https://unpkg.com/${packageJson.name}@${argv.version}/dist/index.html`,
            parameters: {
                instance: [
                    {
                        id: 'schemaUrl',
                        name: 'Schema URL',
                        required: true,
                        type: 'Symbol'
                    }
                ]
            }
        }
    });
}).demandCommand().argv;