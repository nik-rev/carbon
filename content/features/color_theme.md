+++
title = "Custom Theme"
weight = 2
+++

All of Carbon's colors are declared in the `/static/theme.css` file:

```css
{{ include(path="/static/theme.css") }}
```

By copying this file into the same location in your own site, it will override all of the colors so you can choose a custom theme.

<tip>
  You can similarly override any other file provided by the Carbon theme, by having a file at the same location but in your own site
</tip>

