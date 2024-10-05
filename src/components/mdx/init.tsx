import { type MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { Children, type HTMLAttributes, type ReactElement } from "react";

import { langIcons } from "@/lib/filetypes-icons";

import { Separator } from "../ui/separator";
import { Admonition, isValidAdmonitionType } from "./admonition";
import { BlockQuote } from "./blockquote";
import { CodeBlock, InlineCode } from "./code";
import { H1, H2, H3, H4 } from "./heading";
import { Li, Ol, Ul } from "./lists";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { A, P } from "./typography";

export const mdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  // @ts-expect-error -- due to rehype-semantic-blockquotes plugin, figure may have these attributes
  figure: ({
    children,
    ...props
  }: HTMLAttributes<HTMLElement> & {
    ["data-blockquote-container"]: string;
  }) => {
    const isBlockquoteContainer = props["data-blockquote-container"] === "";
    if (!isBlockquoteContainer) {
      return <figure {...props}>{children}</figure>;
    }

    /* eslint @typescript-eslint/no-unsafe-call: off, @typescript-eslint/no-unsafe-member-access: off -- children will be an array and we know exactly that the last child will be a paragraph text node, the first child will be a blockcaption element due to the fact that we are using rehype-semantic-blockquotes plugin */
    // @ts-expect-error -- see eslint comment above
    const content = children.at(0).props.children as ReactElement<HTMLElement>;
    // @ts-expect-error -- see eslint comment above
    const credit = children.at(-1).props.children.props
      .children as ReactElement<HTMLParagraphElement>;

    return <BlockQuote credit={credit}>{content}</BlockQuote>;
  },
  blockquote: BlockQuote,
  ul: Ul,
  ol: Ol,
  // @ts-expect-error -- <Li> will have listType because we use cloneElement to "inject" that attribute based on whether the list item is in an Ol or Ul. Using Context API is out of the question since that would require the list elements to be client components
  li: Li,
  pre: CodeBlock,
  // @ts-expect-error -- need variable to know if we should style it as an inline <code> or as a code block
  code: InlineCode,
  table: Table,
  tbody: TableBody,
  thead: TableHead,
  tr: TableRow,
  th: TableHeader,
  td: TableData,
  a: A,
  // @ts-expect-error -- due to rehype-alerts plugin, aside may have these attributes
  aside: ({
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> & {
    ["data-alert-container"]: string;
    ["data-alert-title"]: string;
  }) => {
    const alertType = rest["data-alert-container"];
    const title = rest["data-alert-title"];

    if (!isValidAdmonitionType(alertType)) {
      return <aside {...rest}>{children}</aside>;
    }

    const childrenArray = Children.toArray(children);

    const firstNewlineIndex = childrenArray.indexOf("\n");
    const childrenWithoutTitle = childrenArray.slice(firstNewlineIndex + 1);

    return (
      <Admonition title={title} alertType={alertType}>
        {childrenWithoutTitle}
      </Admonition>
    );
  },
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
  hr: () => <Separator className="my-10" />,
  figcaption: ({ children, ...rest }) => {
    // @ts-expect-error -- data-language type may be passed, not in our control
    const lang = rest["data-language"] as string;
    const LangIcon = langIcons.get(lang);

    return (
      <figcaption {...rest}>
        {LangIcon && <LangIcon className="inline" />}
        {children}
        {lang ? `.${lang}` : ""}
      </figcaption>
    );
  },
  // sup: Asterisk,
  // figcaption: Figcaption,
  // br, a, em, hr, img, strong, del, input, section, sup
};
