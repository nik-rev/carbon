import Link from "next/link";
import { type HTMLAttributes } from "react";

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

export function A({
  children,
  href,
}: HTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  if (!href) throw new Error("no href specified");

  return (
    <Link
      href={href}
      className="group/link text-accent hover:underline group-[.BLUE]:text-blue group-[.RED]:text-red group-[.YELLOW]:text-yellow group-[.bg-GREEN]:text-green has-[.INLINE-CODE]:no-underline"
    >
      {children}
    </Link>
  );
}
