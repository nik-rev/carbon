import { Flame, Info, TriangleAlert } from "lucide-react";

import { H4 } from "./heading";

const alertTypes = ["note", "warning", "danger"] as const;

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
          className: "border-l-blue bg-blue/5",
          iconClassName: "text-blue",
        } as const)
      : alertType === "warning"
        ? ({
            icon: TriangleAlert,
            className: "border-l-yellow bg-yellow/5",
            iconClassName: "text-yellow",
          } as const)
        : ({
            icon: Flame,
            className: "border-l-red bg-red/5",
            iconClassName: "text-red",
          } as const);

  return (
    <aside
      className={`relative -mx-4 my-4 block overflow-x-auto border-l-4 p-4 max-sm:text-sm md:-mx-8 md:my-8 md:p-8 ${data.className}`}
    >
      {title !== "" && (
        <span className="align-center -mb-2 mt-0 flex justify-between">
          {title !== "" && (
            <H4 className="mt-0" linkClassName={data.iconClassName}>
              {title}
            </H4>
          )}
          <data.icon className={data.iconClassName} />
        </span>
      )}
      {children}
      {title === "" && (
        <data.icon
          className={`absolute right-4 top-4 md:right-8 md:top-8 ${data.iconClassName}`}
        />
      )}
    </aside>
  );
}
