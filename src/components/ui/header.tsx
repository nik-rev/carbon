"use client";

import Link from "next/link";

import { ThemeSwitch } from "./theme-switch";

export function Logo() {
  return (
    <span className="text-2xl font-bold text-green [word-spacing:2px]">
      Nikita Revenco
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky flex justify-center bg-mantle p-12">
      <span className="align-center flex w-full max-w-[1000px] justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <ThemeSwitch />
      </span>
    </header>
  );
}
