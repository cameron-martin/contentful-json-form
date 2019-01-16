# contentful-json-form

A contentful UI extension that auto-generates a form for editing a JSON field based on a JSON Schema.

## Usage

Since extension parameters seem to only be available to extensions installed via the API, this tool comes with a CLI for installation.
For now, you have to clone the repo and run `yarn cli` to use the CLI. This will be packaged via NPM in the future.

Once the plugin is installed, add a JSON field to a content type. Configure the field's appearance to "JSON Schema", and enter the URL of the schema you want to use. To test out the form, you can use this example JSON schema:

    https://unpkg.com/contentful-json-form@latest/exampleSchema.json