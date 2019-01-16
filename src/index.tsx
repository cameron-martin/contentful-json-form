import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as contentfulExtension from 'contentful-ui-extensions-sdk';
import * as devExtension from './dev-extension';

const activeExtension = process.env.NODE_ENV === 'development' ? devExtension : contentfulExtension;

async function getSchema(extension: contentfulExtension.Extension) {
    const response = await fetch(extension.parameters.instance.schemaUrl);

    if(!response.ok) throw new Error('Cannot fetch schema');

    return response.json();
}

activeExtension.init(async extension => {
    extension.window.startAutoResizer();

    const schema = await getSchema(extension);

    console.log(schema);

    ReactDOM.render(<App extension={extension} schema={schema} />, document.getElementById('app'));
});
