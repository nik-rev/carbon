"use client";

import { cloneElement } from "react";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({ children }) {
  return (
    <pre className="-mx-4 my-4 overflow-x-scroll bg-mantle p-4 md:-mx-8 md:my-8 md:p-8">
      {cloneElement(children, { isInCodeBlock: true })}
    </pre>
  );
}

export function InlineCode({
  children,
  isInCodeBlock,
  ...rest
}: {
  children: React.ReactNode;
  isInCodeBlock: boolean;
}) {
  return isInCodeBlock ? (
    <code {...rest}>{children}</code>
  ) : (
    <code className="rounded-md bg-mantle border-surface0 px-[0.3rem] py-[0.2rem] align-middle font-mono text-sm border-[1.5px]">
      {children}
    </code>
  );
}

// export function InlineCode({ children }) {
//   return children;
// }

//
// export function CodeBlock({
//   children,
//   className,
//   ...rest
// }: HTMLAttributes<HTMLPreElement>) {
//   return (
//     <pre className={cn(className)} {...rest}>
//       {
//         // @ts-expect-error -- children is always <code>
//         cloneElement(children, { isInCodeBlock: true })
//       }
//     </pre>
//   );
// }
//
// export function InlineCode({
//   children,
//   className,
//   isInCodeBlock,
// }: HTMLAttributes<HTMLElement> & { isInCodeBlock?: boolean }) {
//   return <code>{children}</code>;
// }
// //  p-4 w-[110%] -translate-x-[5%]
