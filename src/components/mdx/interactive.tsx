"use client";

import { Root as Label } from "@radix-ui/react-label";
import * as RadixSwitch from "@radix-ui/react-switch";
import { type Dispatch, type SetStateAction, useState } from "react";

export default function Switch({
  isChecked,
  setIsChecked,
  label,
}: {
  label: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <span className="flex items-center gap-4 text-sm">
      <RadixSwitch.Root
        id={label}
        checked={!isChecked}
        onCheckedChange={() => {
          setIsChecked(!isChecked);
        }}
        className="relative inline-flex size-8 shrink-0 cursor-pointer items-center rounded-full transition-colors after:absolute after:inset-x-0 after:h-0.5 after:w-full after:bg-surface2"
      >
        <RadixSwitch.Thumb className="data-[state=checked] pointer-events-none z-20 block size-4 rounded-full bg-white transition-transform data-[state=unchecked]:translate-x-4 data-[state=checked]:bg-surface2" />
      </RadixSwitch.Root>

      <Label htmlFor={label} className="font-bold">
        {label}
      </Label>
    </span>
  );
}

export function Interactive() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="rounded-md border border-subtext0 bleed">
      <div className="flex items-center gap-4">
        <Switch
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          label="Checked"
        />
      </div>
    </div>
  );
}
