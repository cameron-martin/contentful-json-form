import { Extension } from 'contentful-ui-extensions-sdk';

export const init = (f: (extension: Extension) => void): void => {
    f(devExtension);
}

const schemaUrl = 'data:application/json,' + require('fs').readFileSync('./exampleSchema.json', { encoding: 'utf8' }).replace(/\s/g, '');

const devExtension: import('contentful-ui-extensions-sdk').Extension = {
    field: {
        getValue() {
            return JSON.parse(localStorage.getItem('saved_data') || '{}');
        },
        setValue(value) {
            localStorage.setItem('saved_data', JSON.stringify(value));
            
            return Promise.resolve();
        }
    },
    window: {
        startAutoResizer() {}
    },
    parameters: {
        installation: {},
        instance: {
            schemaUrl,
        },
    },
}