---
template: "page.html"
title: Installation
---

All commands run in the root of your project.

Initialize a Git repository in your website's directory:

```sh
git init
```

Either add Carbon theme as a git submodule:

```sh
git submodule add https://github.com/nik-rev/carbon.git themes/carbon
```

Or clone the theme:

```sh
git clone https://github.com/nik-rev/carbon.git themes/carbon
```

## Required Configuration

1. Enable the theme in Zola's `config.toml`:

  ```toml
  title = "My website"
  theme = "carbon"
  ```

2. Configure code block highlighting:

  ```toml
  [markdown]
  highlight_code = true
  highlight_theme = "css"
  ```

For a headstart with a blog:

- Create `content/_index.md` which is going to be front page of your site:

  ```md
  +++
  +++

  This is my personal website!
  ```

  <note>
    the `+++` frontmatter which usually contains metadata is required, even though it's empty in this case
  </note>
 
- Create `content/blog/_index.md` with just the frontmatter:

  ```md
  +++
  aliases = ["blog"]
  sort_by = "date"

  [extra]
  order_by_year = true
  +++
  ```

- Create your first blog post, `1984-01-01_my_first_post.md`:

  ```md
  +++
  title = "Hello, world!"
  +++

  Welcome to my blog post!
  ```

That's it! [All other things are the same as in the Zola documentation](https://www.getzola.org/documentation/getting-started/overview/).
