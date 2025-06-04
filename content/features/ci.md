+++
title = "Automatic Deployment + Open Graph Image Generation"
weight = 3
+++

By using [og-image-generator](https://github.com/nik-rev/og-image-generator), you can automatically generate Open Graph images for your website that look like this:

![open graph preview](/features/open_graph_preview.png)

This is nice because it's automatic, and when your blog post is shared somewhere like on Discord it'll show a nice embed picture with the title and description.

This is the GitHub action which builds your Zola site and generates open graph images:

```yaml
name: Build and deploy GH Pages
on:
  push:
    branches:
      - main
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout main
        uses: actions/checkout@v3.0.0
      - name: Deploy to gh-pages branch
        uses: shalzz/zola-deploy-action@v0.20.0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BUILD_ONLY: true
          OUT_DIR: .public
      - run: |
          curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nik-rev/og-image-generator/releases/download/v0.2.0/og-image-generator-installer.sh | sh

          export PATH="$HOME/.cargo/bin:$PATH"
          chmod +x $HOME/.cargo/bin/og-image-generator || true

          sudo chmod -R u+w .public
          cd .public

          sudo /home/runner/.cargo/bin/og-image-generator all --font fonts/Literata/Literata.ttf open_graph_template.html .

          echo "Pushing artifacts to ${GITHUB_REPOSITORY}:gh-pages"

          sudo touch .nojekyll

          sudo git init
          sudo git config user.name "GitHub Actions"
          sudo git config user.email "github-actions-bot@users.noreply.github.com"
          sudo git add .

          sudo git commit -m "Deploy ${GITHUB_REPOSITORY} to ${GITHUB_REPOSITORY}:gh-pages"
          sudo git push --force "https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}" master:gh-pages

          echo "Deploy complete"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

It will:
- Build your Zola website
- Generate all of the Open Graph images
- Deploy your Zola website to `gh-pages` branch on GitHub

You can copy it into `/.github/workflows/release.yml`

## How it works

Carbon already configures it.
However, you might want to customize it.

The open graph image is generated using a file located at `/static/open_graph_template.html`. Here is the default template:

```html
<style>
  :root {
    --background: #161616;
    --foreground: #dddddd;
    --background2: #131313;
    --secondary: #999999;
    --tertiary: #444444;
  }
  body {
    background-color: var(--background);
    font-family: "{{ font }}";
    position: relative;
  }
  #title {
    margin-left: 100px;
    margin-top: 100px;
    color: var(--foreground);
    font-size: 80px;
    margin-bottom: 60px;
    max-width: 70%;
  }
  #description {
    color: var(--secondary);
    margin-left: 100px;
    font-size: 45px;
    max-width: 60%;
  }
  #date {
    position: absolute;
    color: var(--foreground);
    font-size: 30px;
    right: 100px;
    bottom: 100px;
  }
</style>

{% if title %}
  <p id="title">{{ title }}</p>
{% endif %}

{% if description %}
  <p id="description">{{ description }}</p>
{% endif %}

{% if date %}
  <p id="date">{{ date }}</p>
{% endif %}
```

As you can see it uses the Tera syntax, same as Zola.
The variables `{{ title }}`, `{{ description }}` etc are provided by reading the appropriate `<meta>` tags in the HTML.
For Carbon, we place the following tags in the `<head>` element in `templates/index.html`:

```html
<meta
  property="og-image-generator"
  key="title"
  value="{{ og_image_title }}"
/>
<meta
  property="og-image-generator"
  key="description"
  value="{{ og_image_description }}"
/>
```

If you have this frontmatter in your post, such as `/content/blog/recipe_list.md`:

````md
+++
title = "Shopping List"
description = "I want to buy this stuff from Tesco's"
+++

1. Apple
1. Banana
1. Strawberry
````

The following image will be available at url `/content/blog/recipe_list/og.png`:

![recipes preview](/features/recipes.png)

## SEO

All of the appropriate meta tags are already setup for you.

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="author" content="{{ config.author }}" />
<meta property="og:title" content="{{ title }}" />
<meta property="og:description" content="{{ description }}" />
<meta itemprop="headline" content="{{ title }}" />
<meta name="description" content="{{ description }}" />
<meta property="og:url" content="{{ url }}" />
<meta name="og:type" content="summary_large_image" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="{{ title }}" />
<meta property="og:image" content="{{ url ~ 'og.png' }}" />
<meta property="og:image:alt" content="{{ title }}" />
<meta property="og:image:width" content="{{ og_width }}" />
<meta property="og:image:height" content="{{ og_height }}" />
<meta property="twitter:image:width" content="{{ og_width }}" />
<meta property="twitter:image:height" content="{{ og_height }}" />
```

You might want to customize the Open Graph image, in which case, creating `/static/open_graph_template.html` will overwrite Carbon's default `open_graph_template.html`. This default is configured in the GitHub actions shown above.
