import { Quote } from "lucide-react";
import { type HTMLAttributes } from "react";

export function H1({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700"
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
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

export function Asterisk({
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <span className="ml-[0.1rem] text-orange-500" {...props}>
      *
    </span>
  );
}

export function Blockquote({
  children,
  ...props
}: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="mt-6 w-[73ch] -translate-x-[2.4ch] border-l-2 border-slate-300 px-[4ch] pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200"
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
    <li className="pl-2" {...props}>
      {children}
    </li>
  );
}
