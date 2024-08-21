import { cloneElement } from "react";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className={cn("", className)} {...rest}>
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
          "relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400":
            !isInCodeBlock,
          "block overflow-x-scroll p-4": isInCodeBlock,
        },
        className,
      )}
    >
      {children}
    </code>
  );
}
