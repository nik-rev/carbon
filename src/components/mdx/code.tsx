import { cloneElement } from "react";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className={cn("my-4 rounded-md", className)} {...rest}>
      {
        // @ts-expect-error -- children is always <code>
        cloneElement(children, { isInCodeBlock: true })
      }
    </pre>
  );
}

export function InlineCode({
  children,
  className,
  isInCodeBlock,
}: HTMLAttributes<HTMLElement> & { isInCodeBlock?: boolean }) {
  return (
    <code
      className={cn(
        {
          "relative bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400":
            !isInCodeBlock,
          "block w-[73ch] -translate-x-[4ch] overflow-x-auto p-[4ch]":
            isInCodeBlock,
        },
        className,
      )}
    >
      {children}
    </code>
  );
}
//  p-4 w-[110%] -translate-x-[5%]
