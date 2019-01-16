import React from 'react';
import Form from 'react-jsonschema-form';
import { Extension } from 'contentful-ui-extensions-sdk';

interface Props {
    extension: Extension;
    schema: any;
}

const App: React.FunctionComponent<Props> = ({ extension, schema }) => {
    return (
        <Form schema={schema}
            formData={extension.field.getValue()}
            onChange={event => extension.field.setValue(event.formData)}
            onError={error => console.log(error)}
        >
            <div />
        </Form>
    );
};

export default App;