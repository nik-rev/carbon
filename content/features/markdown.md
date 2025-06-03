+++
title = "Markdown Features"
weight = 1
+++

## Lists

### Task

```md
- [ ] Bread
- [ ] Milk
- [x] Butter
```

- [ ] Bread
- [ ] Milk
- [x] Butter

### Ordered

```md
1. Apple
1. Banana
1. Strawberry
```

1. Apple
1. Banana
1. Strawberry

### Unordered

```md
- Apple
  - A
    - Z
      - Y
  - B
- Banana
  - C
    - Y
  - D
- Strawberry
  - E
    - X
  - F
```

- Apple
  - A
    - Z
      - Y
  - B
- Banana
  - C
    - Y
  - D
- Strawberry
  - E
    - X
  - F

## Inline Markdown

{{ include_markdown(path="generated/inline.md") }}

## Headings

```md
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Table

```md
|                | get(i)                 | insert(i)               | remove(i)              | append(Vec(m))    | split_off(i)           | range           | append       |
|----------------|------------------------|-------------------------|------------------------|-------------------|------------------------|-----------------|--------------|
| [`Vec`]        | *O*(1)                 | *O*(*n*-*i*)*           | *O*(*n*-*i*)           | *O*(*m*)*         | *O*(*n*-*i*)           | N/A             | N/A          |
| [`VecDeque`]   | *O*(1)                 | *O*(min(*i*, *n*-*i*))* | *O*(min(*i*, *n*-*i*)) | *O*(*m*)*         | *O*(min(*i*, *n*-*i*)) | N/A             | N/A          |
| [`LinkedList`] | *O*(min(*i*, *n*-*i*)) | *O*(min(*i*, *n*-*i*))  | *O*(min(*i*, *n*-*i*)) | *O*(1)            | *O*(min(*i*, *n*-*i*)) | N/A             | N/A          |
| [`HashMap`]    | *O*(1)~                | *O*(1)~*                | *O*(1)~                | N/A               | N/A                    | N/A             | N/A          |
| [`BTreeMap`]   | *O*(log(*n*))          | *O*(log(*n*))           | *O*(log(*n*))          | N/A               | N/A                    | *O*(log(*n*))   | *O*(*n*+*m*) |
```

|                | get(i)                 | insert(i)               | remove(i)              | append(Vec(m))    | split_off(i)           | range           | append       |
|----------------|------------------------|-------------------------|------------------------|-------------------|------------------------|-----------------|--------------|
| [`Vec`]        | *O*(1)                 | *O*(*n*-*i*)*           | *O*(*n*-*i*)           | *O*(*m*)*         | *O*(*n*-*i*)           | N/A             | N/A          |
| [`VecDeque`]   | *O*(1)                 | *O*(min(*i*, *n*-*i*))* | *O*(min(*i*, *n*-*i*)) | *O*(*m*)*         | *O*(min(*i*, *n*-*i*)) | N/A             | N/A          |
| [`LinkedList`] | *O*(min(*i*, *n*-*i*)) | *O*(min(*i*, *n*-*i*))  | *O*(min(*i*, *n*-*i*)) | *O*(1)            | *O*(min(*i*, *n*-*i*)) | N/A             | N/A          |
| [`HashMap`]    | *O*(1)~                | *O*(1)~*                | *O*(1)~                | N/A               | N/A                    | N/A             | N/A          |
| [`BTreeMap`]   | *O*(log(*n*))          | *O*(log(*n*))           | *O*(log(*n*))          | N/A               | N/A                    | *O*(log(*n*))   | *O*(*n*+*m*) |

## Admonition

```md
> "This is a blockquote"
> 
> -- Einstein, 1984
```

> "This is a blockquote"
> 
> -- Einstein, 1984

```html
<note>
  This is a note
</note>
```

<note>
  This is a note
</note>

```html
<tip>
  This is a tip
</tip>
```

<tip>
  This is a tip
</tip>

```html
<important>
  This is a important
</important>
```

<important>
  This is a important
</important>

```html
<caution>
  This is a caution
</caution>
```

<caution>
  This is a caution
</caution>

```html
<warning>
  This is a warning
</warning>
```

<warning>
  This is a warning
</warning>

## Code Blocks

### Plain

````md
```rust
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```
````

Renders as:

```rust
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

### Line Numbers

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

Renders as:

```rust,linenos
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

#### Start at a specific line

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

Renders as:

```rust,linenos,linenostart=20
fn main() {
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

#### Highlight lines

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

#### Hide lines

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

### Named code blocks

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

### Everything at once

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

Renders as:

```rust,name=mod.rs,hide_lines=2,hl_lines = 3 5,linenos,linenostart = 10
fn main() {
    // This is a comment
    for i in 1..=5 {
        println!("{i} squared is {}", i * i);
    }
}
```

The exact syntax is [described in more detail](https://www.getzola.org/documentation/content/syntax-highlighting/) in the Zola documentation.
