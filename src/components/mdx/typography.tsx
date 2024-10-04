import { Quote } from "lucide-react";
import Link from "next/link";
import { type HTMLAttributes } from "react";

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
