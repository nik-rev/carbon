+++
title = "Extending Carbon Theme"
weight = 4
+++

This example shows how to extend a template in Carbon with custom HTML and CSS.

Say you want to add some additional css, place this file in *your* project (you can choose any name) at `/static/custom.css`:

```css
div {
  background-color: red;
}
```

The file `/themes/carbon/templates/index.html` is the root HTML file, which all pages like `/themes/carbon/templates/page.html` inherit from.

This file imports all CSS for the website. This is an excerpt from the `/themes/carbon/templates/index.html`:

```html
<head>
  <!-- ... content exclude ... -->
  <script src="/code_blocks.js" type="text/javascript" defer></script>
  <script src="/theme_toggle.js" type="text/javascript" defer></script>

  <!-- Allow adding custom elements to the <head> -->
  {% block extra_head %}
  {% endblock extra_head %}
</head>
```

The block `extra_head` allows you to trivially customize the `index.html` file.
In your project, create `/template/index.html` with the following contents:

```html
{% extends "carbon/templates/index.html" %}

{% block extra_head %}
  <link
    rel="stylesheet"
    href="{{ get_url(path='custom.css', cachebust=true)} }"
  />
{% endblock extra_head %}
```

The above will essentially copy all of the code from [`/themes/carbon/templates/index.html`](https://github.com/nik-rev/carbon/blob/main/templates/index.html) and put it into your own `/templates/index.html` but with an extension, namely it will import your `/static/custom.css` file.

Your `/templates/index.html` is now the source of truth.

You can take a look at other templates in `/themes/carbon/templates/*.html`. All of them can be extended in similar ways.

Specifically, all the templates `{% extends "carbon/templates/index.html" %}` so usually you will want to do the same.

Everywhere you see a `{% block %} ... {% endblock %}`, you can extend it without having to override the rest of the page!

## Custom theme

Similarly, you can override any of the static assets.
Carbon uses the `/themes/carbon/static/carbon/theme.css` file for all the colors:

```css
{{ include(path="/static/carbon/theme.css") }}
```

You can place the file in your own website at `/static/carbon/theme.css` and Carbon's file will be overwritten by your file.

Relevant Zola documentation:

- [Customizing a theme](https://www.getzola.org/documentation/themes/extending-a-theme/)
