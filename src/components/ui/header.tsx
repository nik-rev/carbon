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
    <header className="flex justify-center bg-mantle px-4 py-12">
      <span className="align-center max-w-article flex w-full justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <ThemeSwitch />
      </span>
    </header>
  );
}
