"use client";

import { Check, Copy } from "lucide-react";
import { Children, cloneElement, useState } from "react";
import { type HTMLAttributes } from "react";

const extractTextFromChildren = (childrenOrText, text = "") => {
  if (childrenOrText === null) {
    return text;
  }

  if (typeof childrenOrText === "string") {
    return extractTextFromChildren(null, text.concat(childrenOrText));
  }

  if ("props" in childrenOrText && "children" in childrenOrText.props) {
    return extractTextFromChildren(childrenOrText.props.children, text);
  }

  if (Array.isArray(childrenOrText)) {
    return childrenOrText.reduce(
      (acc, kid) => acc.concat(extractTextFromChildren(kid)),
      text,
    );
  }
};

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
    <pre className="relative -mx-4 my-4 overflow-x-scroll bg-mantle p-4 md:-mx-8 md:my-8 md:p-8">
      {
        // @ts-expect-error -- will always be <code> element
        cloneElement(children, { isInCodeBlock: true })
      }
      <button onClick={handleCopy}>
        {isCopying ? (
          <Check className="absolute right-2 top-2 border-surface0 bg-crust" />
        ) : (
          <Copy className="absolute right-2 top-2 border-surface0 bg-crust" />
        )}
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
