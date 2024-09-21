import { cloneElement } from "react";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLPreElement>) {
  return (
    // -mx-4 my-4 p-4 md:-mx-8 md:my-8 md:p-8
    <pre className={cn("w-full rounded-md", className)} {...rest}>
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
          "relative rounded-md bg-slate-100 px-[0.3rem] py-[0.2rem] align-middle font-mono text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-400":
            isInlineCode,
          "-mx-4 my-4 block overflow-x-auto p-4 md:-mx-8 md:my-8 md:p-8 max-sm:text-sm":
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
