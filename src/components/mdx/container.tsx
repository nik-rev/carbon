import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Bleed({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("-mx-4 my-4 p-4 md:-mx-8 md:my-8 md:p-8", className)}>
      {children}
    </div>
  );
}
