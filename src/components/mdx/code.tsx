"use client";

import { cloneElement } from "react";
import { type HTMLAttributes } from "react";

export function CodeBlock({ children }: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className="-mx-4 my-4 overflow-x-scroll bg-mantle p-4 md:-mx-8 md:my-8 md:p-8">
      {
        // @ts-expect-error -- will always be <code> element
        cloneElement(children, { isInCodeBlock: true })
      }
    </pre>
  );
}

export function InlineCode({
  children,
  isInCodeBlock,
  ...rest
}: HTMLAttributes<HTMLElement> & {
  isInCodeBlock: boolean;
}) {
  return isInCodeBlock ? (
    <code {...rest}>{children}</code>
  ) : (
    <code className="rounded-md border-[1.5px] border-surface0 bg-mantle px-[0.3rem] py-[0.2rem] align-middle font-mono text-sm">
      {children}
    </code>
  );
}
