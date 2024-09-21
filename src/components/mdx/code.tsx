"use client";

import { Check, Copy } from "lucide-react";
import { Children, cloneElement, useState } from "react";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLPreElement>) {
  return (
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

  const label = "";

  Children.map(children, (child) => {
    console.log(child);
  });

  const [isCopying, setIsCopying] = useState(false);
  const Icon = isCopying ? Check : Copy;
  const handleClick = () => {
    console.log(label);
    setIsCopying(true);
    setTimeout(() => {
      setIsCopying(false);
    }, 1000);
  };
  const iconClass =
    "absolute right-6 top-6 transition-opacity opacity-0 group-hover:opacity-100";

  return (
    <code
      className={cn(
        {
          "relative rounded-md bg-slate-100 px-[0.3rem] py-[0.2rem] align-middle font-mono text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-400":
            isInlineCode,
          "group relative -mx-4 my-4 block overflow-x-auto p-4 max-sm:text-sm md:-mx-8 md:my-8 md:p-8":
            isInCodeBlock,
        },
        className,
      )}
    >
      {children}

      {!isInlineCode && (
        <button type="button" onClick={handleClick}>
          {isCopying ? (
            <Check className={cn(iconClass, "text-green-500")} />
          ) : (
            <Copy className={iconClass} />
          )}
        </button>
      )}
    </code>
  );
}
//  p-4 w-[110%] -translate-x-[5%]
