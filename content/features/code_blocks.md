+++
title = "Code Blocks"
+++

## Plain

The following markdown:

````md
```rust
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders as following:

```rust
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

## Line Numbers

Use `linenos` attribute to enable line numbers:

````md
```rust,linenos
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders like this:

```rust,linenos
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

### Start at a specific line

You can specify `linenostart` to start at a specific line number:

````md
```rust,linenos,linenostart=20
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders as following:

```rust,linenos,linenostart=20
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

### Highlight lines

Make certain lines stand out.

````md
```rust,hl_lines=1 3-5
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders as:

```rust,hl_lines=1 3-5
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

### Hide lines

Hide certain lines.

````md
```rust,hide_lines=2
fn main() {
    // Secret!
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders as:

```rust,hide_lines=2
fn main() {
    // Secret!
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

## Named code blocks

You can also name code blocks.

````md
```rust,name=mod.rs
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders as:

```rust,name=mod.rs
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

## Everything at once

All the attributes compose together.

````md
```rust,name=mod.rs,hide_lines=2,hl_lines = 3-5,linenos,linenostart = 10
fn main() {
    // This is a comment
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders as following:

```rust,name=mod.rs,hide_lines=2,hl_lines = 3-5,linenos,linenostart = 10
fn main() {
    // This is a comment
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

The exact syntax is [described in more detail](https://www.getzola.org/documentation/content/syntax-highlighting/) in the Zola documentation.
