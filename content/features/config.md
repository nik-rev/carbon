+++
title = "Config"
weight = 2
+++

You can extend and customize any part of Carbon's HTML by using Zola templates, as described in [Extending Carbon Theme](/features/extending)

Carbon has a few additional config options you can put into your site's `config.toml`, as described below, with their defaults:

```toml
# Message to show at the bottom of the website.
footer = "Powered by [Zola](https://github.com/getzola/zola) and [nik-rev/carbon](https://github.com/nik-rev/carbon)"

# Links to show in the header and their text.
# The currently active link is highlighted.
#
# This website (carbon demo) uses the following config:
# header_links = [
#   { name = "/home", link = "/" },
#   "/features",
#   "/blog",
#   { name = "/installation.md", link = "/installation" },
# ]
header_links = []
```

All options can be set to `false` to disable their specific feature. (e.g. `footer = false` will hide the footer)
