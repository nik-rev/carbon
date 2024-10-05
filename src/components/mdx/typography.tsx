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
      className="group/link text-accent underline decoration-transparent transition-colors hover:decoration-accent group-[.BLUE]:text-blue group-[.RED]:text-red group-[.YELLOW]:text-yellow group-[.bg-GREEN]:text-green group-[.BLUE]:hover:decoration-blue group-[.RED]:hover:decoration-red group-[.YELLOW]:hover:decoration-yellow group-[.bg-GREEN]:hover:decoration-green has-[.INLINE-CODE]:no-underline"
    >
      {children}
    </Link>
  );
}
