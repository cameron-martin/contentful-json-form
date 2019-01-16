declare module 'contentful-ui-extensions-sdk' {
    export interface Extension {
        field: Field;
        window: ExtensionWindow;
    }

    export interface ExtensionWindow {
        startAutoResizer(): void;
    }

    export interface Field {
        getValue(): any;
        setValue(value: any): Promise<void>;
    }

    export function init(f: (extension: Extension) => void): void;
}