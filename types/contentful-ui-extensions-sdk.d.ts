declare module 'contentful-ui-extensions-sdk' {
    export interface Extension {
        field: Field;
        window: ExtensionWindow;
        parameters: Parameters;
    }

    export interface ExtensionWindow {
        startAutoResizer(): void;
    }

    export interface Field {
        getValue(): any;
        setValue(value: any): Promise<void>;
    }

    export interface Parameters {
        installation: Record<string, any>;
        instance: Record<string, any>;
    }

    export function init(f: (extension: Extension) => void): void;
}