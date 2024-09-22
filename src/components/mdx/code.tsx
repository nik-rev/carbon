"use client";

import { Check, Copy } from "lucide-react";
import { cloneElement, useState } from "react";
import { type HTMLAttributes } from "react";

import { extractTextFromChildren } from "@/lib/utils";

export function CodeBlock({ children }: HTMLAttributes<HTMLPreElement>) {
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = () => {
    const text = extractTextFromChildren(children);

    setIsCopying(true);

    void navigator.clipboard.writeText(text);

    setTimeout(() => {
      setIsCopying(false);
    }, 3000);
  };

  return (
    <pre className="relative -mx-4 my-4 bg-mantle p-4 md:-mx-8 md:my-8 md:p-8">
      <div className="overflow-x-scroll">
      {
        // @ts-expect-error -- will always be <code> element
        cloneElement(children, { isInCodeBlock: true })
      }</div>
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 md:right-8 md:top-8 hover:text-text transition-colors text-subtext0 bg-mantle transition-transform hover:scale-90"
      >
        {isCopying ? <Check className="text-green" /> : <Copy />}
      </button>
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
