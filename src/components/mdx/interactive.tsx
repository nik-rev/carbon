"use client";

import { Root as Label } from "@radix-ui/react-label";
import * as RadixSlider from "@radix-ui/react-slider";
import * as RadixSwitch from "@radix-ui/react-switch";
import { type Dispatch, type SetStateAction, useState } from "react";

export function Switch({
  label,
  value,
  dispatcher,
  defaultChecked,
}: {
  label: string;
  value: boolean;
  dispatcher: Dispatch<SetStateAction<boolean>>;
  defaultChecked?: boolean;
}) {
  return (
    <span className="flex items-center gap-4 text-sm">
      <RadixSwitch.Root
        defaultChecked={defaultChecked}
        checked={value}
        name={label}
        id={label}
        onCheckedChange={(isChecked) => {
          dispatcher(isChecked);
        }}
        className="relative inline-flex size-8 shrink-0 cursor-pointer items-center rounded-full transition-colors after:absolute after:inset-x-0 after:h-0.5 after:w-full after:bg-surface2"
      >
        <RadixSwitch.Thumb className="pointer-events-none z-20 block size-4 rounded-full bg-white transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:bg-surface2" />
      </RadixSwitch.Root>

      <Label htmlFor={label} className="font-bold">
        {label}
      </Label>
    </span>
  );
}

export default function Slider({
  min,
  max,
  step = 1,
  value,
  dispatcher,
  label,
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  dispatcher: Dispatch<SetStateAction<number>>;
  step?: number;
}) {
  return (
    <div className="flex w-96 flex-col gap-3 text-sm">
      <div className="flex justify-between">
        <Label htmlFor={label} className="font-bold">
          {label}
        </Label>
        <span>{value}</span>
      </div>
      <RadixSlider.Root
        onValueChange={([newValue]) => {
          dispatcher(newValue);
        }}
        id={label}
        min={min}
        value={[value]}
        max={max}
        step={step}
        className="relative mx-4 flex h-2 touch-none select-none items-center"
      >
        <RadixSlider.Track className="relative h-0.5 grow rounded-full bg-surface2">
          <RadixSlider.Range className="absolute h-full rounded-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="ring-offset-background block size-4 rounded-full bg-white transition-colors" />
      </RadixSlider.Root>
    </div>
  );
}

export function Interactive() {
  const [isToggled, setIsToggled] = useState(false);
  const [slider, setSlider] = useState(50);

  return (
    <div className="rounded-md border border-subtext0 bleed">
      <Switch label="Checked" value={isToggled} dispatcher={setIsToggled} />

      <Slider
        min={1}
        max={100}
        label="This is my slider"
        value={slider}
        dispatcher={setSlider}
      />
    </div>
  );
}
