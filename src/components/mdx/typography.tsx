import { Hash, Quote } from "lucide-react";
import Link from "next/link";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function LinkToHeading({ id }: { id?: string }) {
  if (!id) throw new Error("no id specified");

  return (
    <a href={`#${id}`} className="md:hidden">
      <Hash className="absolute -left-8 top-1 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

export function H1({
  children,
  id,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="group scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    >
      <LinkToHeading id={id} />
      {children}
    </h1>
  );
}

export function H2({
  children,
  id,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="group mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700"
      {...props}
    >
      <LinkToHeading id={id} />
      {children}
    </h2>
  );
}

export function H3({
  children,
  id,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="group relative mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      id={id}
      {...props}
    >
      <LinkToHeading id={id} />
      {children}
    </h3>
  );
}

export function H4({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
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
