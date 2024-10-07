import {
  Flame,
  Info,
  Lightbulb,
  PartyPopper,
  TriangleAlert,
} from "lucide-react";

import { H4 } from "./heading";

const alertTypes = ["note", "tip", "warning", "danger", "fun fact"] as const;

// const alertColors = ["BLUE", "YELLOW", "TEAL", "PINK", "RED"];

export const tintedOverlay =
  "group-[.BLUE]:before:bg-blue/5 group-[.RED]:before:bg-red/5 group-[.TEAL]:before:bg-teal/5 group-[.YELLOW]:before:bg-yellow/5";

export const alertInlineCode =
  "group-[.BLUE]:group-hover/link:border-b-blue group-[.RED]:group-hover/link:border-b-red group-[.TEAL]:group-hover/link:border-b-teal group-[.YELLOW]:group-hover/link:border-b-yellow";

export const alertOlLi =
  "group-[.BLUE]:marker:text-blue group-[.RED]:marker:text-red group-[.TEAL]:marker:text-teal group-[.YELLOW]:marker:text-yellow";

export const alertColoredText =
  "group-[.BLUE]:text-blue group-[.RED]:text-red group-[.TEAL]:text-teal group-[.YELLOW]:text-yellow";

export const isValidAdmonitionType = (str: string): str is AlertType =>
  alertTypes.includes(str);

export type AlertType = (typeof alertTypes)[number];

export function Admonition({
  alertType,
  title,
  children,
}: {
  alertType: AlertType;
  title: string;
  children: React.ReactNode;
}) {
  const data =
    alertType === "note"
      ? ({
          icon: Info,
          className: "border-l-blue bg-blue/5 BLUE",
          iconClassName: "text-blue",
        } as const)
      : alertType === "warning"
        ? ({
            icon: TriangleAlert,
            className: "border-l-yellow bg-yellow/5 YELLOW",
            iconClassName: "text-yellow",
          } as const)
        : alertType === "tip"
          ? ({
              icon: Lightbulb,
              className: "border-l-teal bg-teal/5 TEAL",
              iconClassName: "text-teal",
            } as const)
          : alertType === "fun fact"
            ? ({
                icon: PartyPopper,
                className: "border-l-pink bg-pink/5 PINK",
                iconClassName: "text-pink",
              } as const)
            : ({
                icon: Flame,
                className: "border-l-red bg-red/5 RED",
                iconClassName: "text-red",
              } as const);

  const icon = (
    <span className={`flex gap-x-2 ${data.iconClassName}`}>
      <span className="font-bold uppercase">{alertType}</span>
      <data.icon strokeWidth={2.4} />
    </span>
  );

  return (
    <aside
      className={`group relative block overflow-x-auto border-l-4 bleed max-sm:text-sm ${data.className}`}
    >
      {title !== "" && (
        <span className="align-center -mb-2 mt-0 flex justify-between">
          {title !== "" && (
            <H4 className="mt-0" linkClassName={data.iconClassName}>
              {title}
            </H4>
          )}
          {icon}
        </span>
      )}
      {children}
      {title === "" && (
        <span
          className={`absolute right-4 top-4 md:right-8 md:top-8 ${data.iconClassName}`}
        >
          {icon}
        </span>
      )}
    </aside>
  );
}
