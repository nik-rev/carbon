# Carbon

A zola theme inspired by simplicity

## Features

- SEO Friendly
- Light and Dark mode toggle
- Customizable
- Responsive
- Accessible

Markdown:

- Copy to Clipboard button for code blocks
- Markdown in Headings is fully supported

Development:

- Automatic deploy with GitHub actions
- OpenGraph image generation (powered by [og-image-generator](git@github.com:nik-rev/og-image-generator.git))

## Config

These are the things you can put into `[extra]` section in `config.toml`.

For clarity:

- `a | b` means "`a` or `b`"
- `a[]` means "list of `a`s"
- `a: b` means "`a` has type `b`"

All fields are optional.

- `header_links: HeaderLink[]` specifies links to render in the navigation:

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

- `blog_title: string` is a custom title to use in the **Blog** section.

  - **Default**: Same as the `title` field.

Light or dark theme options.

- `theme: "light" | "dark"` sets the theme to use. This has lower priority than either `respect_browser_preference` or `theme_toggle`.

  - **Default**: Is `"dark"`

- `respect_browser_preference: true | false` if `false` ignores preference of the user. This has lower priority than `theme_toggle`.

  - **Default**: Is `true`

- `theme_toggle: true | false` lets the user change the theme, if `true`. Browser preferences are taken into account regardless.

  - **Default**: Is `true`
