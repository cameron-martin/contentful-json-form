import React from 'react';
import Form from 'react-jsonschema-form';
import schema from './schema.json';
import { Extension } from 'contentful-ui-extensions-sdk';

interface Props {
    extension: Extension;
}

const App: React.FunctionComponent<Props> = ({ extension }) => {
    return (
        <Form schema={schema as any}
            formData={extension.field.getValue()}
            onChange={event => extension.field.setValue(event.formData)}
            onError={error => console.log(error)}
        >
            <div />
        </Form>
    );
};

export default App;