import { cloneElement } from "react";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className={cn("my-8 w-full rounded-md", className)} {...rest}>
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
  const isInlineCode = !isInCodeBlock;

  return (
    <code
      className={cn(
        {
          "relative rounded-md bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-400":
            isInlineCode,
          "block w-[73ch] -translate-x-[2.4ch] overflow-x-auto rounded-lg p-[4ch] shadow-inner":
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
