# Carbon

A zola theme inspired by simplicity

## Features

- SEO Friendly
- Light and Dark mode toggle
- Customizable
- Responsive
- Accessible

### Markdown

- Copy to Clipboard button for code blocks
- Markdown in Headings is fully supported
- Utility tags for styling such as `<note>This function was deprecated in version 0.11</note>`

### Development

- Automatic deployment with GitHub actions, including OpenGraph image generation (powered by [og-image-generator](git@github.com:nik-rev/og-image-generator.git))

### Lightweight

Carbon theme delivers a featureful, yet simple blog theme with minimal dependencies and JavaScript. JavaScript is only used where necessary:

- Copy to clipboard button
- Theme toggle

## Config

These are the things you can put into `[extra]` section in `config.toml`.

All fields are optional.

- `header_links` is a list of `HeaderLink` and specifies links to render in the navigation:

  ```ts
  type HeaderLink =
    | {
        // Contents of the link
        name: string;
        // Where you will be redirected when you click on the link
        link: string;
      }
    // If you use a string instead of the above object,
    // both `name` and `link` will be set to this
    | string;
  ```

  - **Default**: Disables the navigation section

Footer

- `show_footer`: Show the footer

  - **Default**: `true`

- `footer_content` Contents of the message at the bottom of each page.

  - **Default**: `"Powered by [Zola](https://github.com/getzola/zola) and [nik-rev/carbon](https://github.com/nik-rev/carbon)"`
