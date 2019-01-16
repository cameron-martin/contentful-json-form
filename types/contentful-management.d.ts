declare module 'contentful-management' {
    namespace contentful {
        interface ClientOptions {
            accessToken: string;
        }

        interface Client {
            getSpace(id: string): Promise<Space>;
        }

        interface Space {
            getEnvironment(id: string): Promise<Environment>;
        }

        interface Environment {
            createUiExtension(extension: { extension: UiExtension }): Promise<void>;
        }

        interface UiExtension {
            name: string;
            src: string;
            fieldTypes: { type: "Symbol" | "Text" | "Integer" | "Number" | "Date" | "Boolean" | "Object" }[];
            parameters?: UiExtensionParameters;
        }

        interface UiExtensionParameters {
            installation?: UiExtensionParameter[];
            instance?: UiExtensionParameter[];
        }

        interface UiExtensionParameter {
            name: string;
            id: string;
            description?: string;
            type: 'Symbol' | 'Enum' | 'Number' | 'Boolean';
            required?: boolean;
        }
    }

    interface contentful {
        createClient(options: contentful.ClientOptions): contentful.Client;
    }

    const contentful: contentful;

    export = contentful;
}