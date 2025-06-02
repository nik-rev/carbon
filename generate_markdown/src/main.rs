use std::{collections::HashSet, fs, path::Path};

use itertools::Itertools;
use strum::{EnumCount, IntoEnumIterator};
use tap::Pipe;

/// Inline Markdown
#[derive(
    strum::EnumIter,
    strum::VariantArray,
    Clone,
    strum::Display,
    Ord,
    PartialEq,
    PartialOrd,
    Eq,
    Hash,
    strum::IntoStaticStr,
    strum::EnumCount,
    Debug,
)]
#[strum(serialize_all = "kebab-case")]
enum InlineMarkdown {
    /// Bold
    ///
    /// **...**
    Bold,
    /// Italics
    ///
    /// _..._
    Italics,
    /// Links
    ///
    /// [...](#)
    Link,
    /// Small text
    ///
    /// <small> ... </small>
    Small,
    /// Keyboard
    ///
    /// <kbd> ... </kbd>
    Kbd,
    /// Subscript
    ///
    /// <sub> ... </sub>
    Sub,
    /// Superscript
    ///
    /// <sup> ... </sup>
    Sup,
    /// Superscript
    ///
    /// <mark> ... </mark>
    Mark,
    /// Crossed out
    ///
    /// ~...~
    Strikethrough,
    /// Inline code
    ///
    /// `...`
    ///
    /// NOTE: Keep this one last. Because anything included in an
    /// inline code does not get formatted, e.g. `**hello**` is not "italic code"
    Code,
}

impl InlineMarkdown {
    fn wrapper(&self) -> (&'static str, &'static str) {
        macro_rules! tag {
            ($tag:literal) => {
                (concat!("<", $tag, ">"), concat!("</", $tag, ">"))
            };
        }
        match self {
            InlineMarkdown::Bold => ("**", "**"),
            InlineMarkdown::Italics => ("_", "_"),
            InlineMarkdown::Link => ("[", "](#)"),
            InlineMarkdown::Code => ("`", "`"),
            InlineMarkdown::Strikethrough => ("~", "~"),
            InlineMarkdown::Small => tag!("small"),
            InlineMarkdown::Kbd => tag!("kbd"),
            InlineMarkdown::Sub => tag!("sub"),
            InlineMarkdown::Sup => tag!("sup"),
            InlineMarkdown::Mark => tag!("mark"),
        }
    }
}

fn main() {
    (1..=InlineMarkdown::COUNT)
        .map(|n| {
            InlineMarkdown::iter()
                .permutations(n)
                // --- We want to remove all duplicates
                //
                // E.g.
                //
                // bold + italic + code
                //
                // is the same as
                //
                // bold + code + italic
                .map(|mut permutation| {
                    permutation.sort();
                    permutation
                })
                .collect::<HashSet<_>>()
                // ---
                .into_iter()
                .sorted()
                .map(|permutation| {
                    permutation
                        .into_iter()
                        .sorted()
                        .fold(
                            (String::new(), String::new(), String::new()),
                            |(mut before, mut name, mut after), modifier| {
                                let (part_before, part_after) = modifier.wrapper();

                                before.push_str(part_before);
                                if !name.is_empty() {
                                    name.push(' ');
                                }
                                name.push_str(modifier.into());
                                after = part_after.to_string() + &after;
                                (before, name, after)
                            },
                        )
                        .pipe(|(a, b, c)| format!("- {a}{b}{c}\n"))
                })
                .collect::<String>()
                .pipe(|mods| {
                    let heading = if n == 1 {
                        "".to_string()
                    } else {
                        format!("### {n} modifiers\n\n")
                    };
                    let details_opening = if n == 2 {
                        "<details><summary>All Combinations</summary>\n\n".to_string()
                    } else {
                        "".to_string()
                    };
                    let details_closing = if n == InlineMarkdown::COUNT {
                        "</details>".to_string()
                    } else {
                        "".to_string()
                    };
                    let mods_in_code = if n == 1 {
                        format!("```md\n{mods}```\n")
                    } else {
                        "".to_string()
                    };
                    format!(
                        "{details_opening}{heading}{mods_in_code}
{mods}
{details_closing}",
                    )
                })
        })
        .collect::<String>()
        .pipe(|s| {
            let parent = Path::new(env!("CARGO_MANIFEST_DIR"))
                .join("..")
                .join("generated");
            let path = parent.join("inline.md");

            fs::create_dir_all(parent).unwrap();
            fs::write(&path, s)
        })
        .expect("failed to write all permutations of inline markdown");
}
