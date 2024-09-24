import {
  CircleAlert,
  Flame,
  Info,
  type LucideIcon,
  TriangleAlert,
} from "lucide-react";
import { type HTMLAttributes } from "react";
import { type ClassNameValue } from "tailwind-merge";

import { cn } from "@/lib/utils";

import { H4 } from "./typography";

function Admonition({
  children,
  title,
  /* eslint-disable ts/naming-convention -- Icon is a component */
  Icon,
  /* eslint-enable ts/naming-convention -- Icon is a component */
  className,
  iconClassName,
}: HTMLAttributes<HTMLElement> & {
  /* eslint-disable ts/naming-convention -- Icon is a component */
  Icon: LucideIcon;
  /* eslint-enable ts/naming-convention -- Icon is a component */
  iconClassName: ClassNameValue;
}) {
  return (
    <aside
      className={cn(
        "relative -mx-4 my-4 block overflow-x-auto border-l-4 p-4 max-sm:text-sm md:-mx-8 md:my-8 md:p-8",
        className,
      )}
    >
      <span className="align-center -mb-2 mt-0 flex justify-between">
        <H4 className="mt-0" linkClassName={iconClassName}>
          {title}
        </H4>
        <Icon className={cn("", iconClassName)} />
      </span>
      {children}
    </aside>
  );
}
// I could place Danger, Alert and Note components' functionality straight into Admonition, but I didn't because this provides for a nicer authoring experience instead of having to type <Admonition variant="note"> I just write <Note>

export function Note({ children, title }: HTMLAttributes<HTMLElement>) {
  return (
    <Admonition
      Icon={Info}
      iconClassName="text-blue"
      className="border-l-blue bg-blue/5"
      title={title}
    >
      {children}
    </Admonition>
  );
}

export function Alert({ children, title }: HTMLAttributes<HTMLElement>) {
  return (
    <Admonition
      Icon={TriangleAlert}
      iconClassName="text-yellow"
      className="border-l-yellow bg-yellow/5"
      title={title}
    >
      {children}
    </Admonition>
  );
}

export function Warning({ children, title }: HTMLAttributes<HTMLElement>) {
  return (
    <Admonition
      Icon={Flame}
      iconClassName="text-red"
      className="border-l-red bg-red/5"
      title={title}
    >
      {children}
    </Admonition>
  );
}
