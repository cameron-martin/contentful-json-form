import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as contentfulExtension from 'contentful-ui-extensions-sdk';
import * as devExtension from './dev-extension';

const activeExtension = process.env.NODE_ENV === 'development' ? devExtension : contentfulExtension;

activeExtension.init(extension => {
    extension.window.startAutoResizer();

    ReactDOM.render(<App extension={extension} />, document.getElementById('app'));
});
