+++
title = "Carbon's Blog"
aliases = ["blog"]
sort_by = "date"

[extra]
order_by_year = true
+++

Notice how the title changed from `Carbon` to `Carbon's Features`?

This config is used for that effect:

```toml
title = "Carbon"

[extra]
content_title = "Carbon's Features"
```

If you unset `content_title`, then the title will be the same everywhere.
