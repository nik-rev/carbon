"use client";

import { ThemeSwitch } from "./theme-switch";

export function Logo() {
  return (
    <span className="font-bold text-green [word-spacing:2px]">
      Nikita Revenco
    </span>
  );
}

export function Header() {
  return (
    <header className="flex justify-center bg-mantle p-8 sticky">
      <span className="align-center flex w-full max-w-[1000px] justify-between">
        <Logo />
        <ThemeSwitch />
      </span>
    </header>
  );
}
