import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Bleed({
  children,
  className,
  shouldFullBleedOnSmallDevices,
}: HTMLAttributes<HTMLDivElement> & {
  shouldFullBleedOnSmallDevices: boolean;
}) {
  return (
    <div
      className={cn(
        "my-4 bg-green-400 p-4 md:my-8 md:w-[110%] md:translate-x-[-5%] md:rounded-md md:p-8",
        {
          "relative left-1/2 !w-screen": shouldFullBleedOnSmallDevices,
          "": !shouldFullBleedOnSmallDevices,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
