import { Link as SvgLink, Quote } from "lucide-react";
import Link from "next/link";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function LinkToHeading({ id }: { id?: string }) {
  if (!id) throw new Error("no id specified");

  return (
    <a href={`#${id}`} className="inline-flex items-center md:hidden">
      <SvgLink
        className="inline text-accent opacity-0 group-hover:opacity-100"
        size={20}
      />
    </a>
  );
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4;
  id?: string;
  children: React.ReactNode;
};

function Heading({ level, children, id, ...props }: HeadingProps) {
  const HeadingElement = `h${level}` as const;
  const baseStyles =
    "scroll-m-20 font-semibold tracking-tight transition-colors group-hover:text-accent";

  const sizeStyles = {
    1: { className: "text-4xl font-extrabold lg:text-5xl", iconSize: 32 },
    2: {
      className:
        "mt-10 border-b border-b-slate-200 pb-2 text-3xl first:mt-0 dark:border-b-slate-700",
      iconSize: 24,
    },
    3: { className: "relative mt-8 text-2xl", iconSize: 20 },
    4: { className: "mt-8 text-xl", iconSize: 16 },
  };

  return (
    <a href={`#${id}`} className="group">
      <HeadingElement
        className={`${baseStyles} ${sizeStyles[level].className}`}
        {...props}
      >
        {children}
        <SvgLink
          className="mb-1 ml-2.5 inline text-accent opacity-0 transition-opacity group-hover:opacity-100"
          size={sizeStyles[level].iconSize}
        />
      </HeadingElement>
    </a>
  );
}
export function H1({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Heading level={1} {...rest}>
      {children}
    </Heading>
  );
}

export function H2({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Heading level={2} {...rest}>
      {children}
    </Heading>
  );
}

export function H3({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Heading level={3} {...rest}>
      {children}
    </Heading>
  );
}

export function H4({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Heading level={4} {...rest}>
      {children}
    </Heading>
  );
}

export function P({
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
}

export function A({
  children,
  href,
}: HTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  if (!href) throw new Error("no href specified");

  return (
    <Link href={href} className="text-accent hover:text-accent/90">
      {children}
    </Link>
  );
}

export function Blockquote({
  children,
  ...props
}: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="mt-6 w-[73ch] translate-x-[-2.4ch] border-l-2 border-slate-300 px-[4ch] pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200"
      {...props}
    >
      <Quote className="-mb-4 fill-slate-300 stroke-slate-300" />
      {children}
    </blockquote>
  );
}

export function Ul({ children, ...props }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  );
}

export function Ol({ children, ...props }: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  );
}

export function Li({ children, ...props }: HTMLAttributes<HTMLLIElement>) {
  return (
    <li className="pl-2 leading-7" {...props}>
      {children}
    </li>
  );
}
