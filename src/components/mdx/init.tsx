import { type MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import { Separator } from "../ui/separator";
import { Caution, Important, Note, Tip, Warning } from "./admonition";
import { CodeBlock, InlineCode } from "./code";
import { Highlight } from "./highlight";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import {
  Asterisk,
  Blockquote as BlockQuote,
  H1,
  H2,
  H3,
  H4,
  Li,
  Ol,
  P,
  Ul,
} from "./typography";
import { Bleed } from "./container";

export const mdxComponents: MDXComponents = {
  /* eslint ts/naming-convention: "off" -- We have to use PascalCase in order for our custom components to work */
  Bleed,
  Note,
  Tip,
  Warning,
  Caution,
  Highlight,
  Important,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  blockquote: BlockQuote,
  ul: Ul,
  ol: Ol,
  li: Li,
  pre: CodeBlock,
  code: InlineCode,
  table: Table,
  tbody: TableBody,
  thead: TableHead,
  tr: TableRow,
  th: TableHeader,
  td: TableData,
  /* eslint ts/no-non-null-assertion: "off" -- Realistally will always have an href */
  a: ({ children, href }) => <Link href={href!}>{children}</Link>,
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
  sup: Asterisk,
  hr: () => <Separator className="my-10" />,
  // br, a, em, hr, img, strong, del, input, section, sup
};
