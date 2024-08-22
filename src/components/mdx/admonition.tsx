import { type HTMLAttributes } from "react";

import {
  Alert,
  AlertDescription,
  type alertMapper,
  AlertTitle,
} from "../ui/alert";

function AdmonitionFactory(variant: keyof typeof alertMapper) {
  return function Admonition({
    children,
    title,
  }: HTMLAttributes<HTMLElement> & {
    title: string;
  }) {
    return (
      <Alert
        {...{ variant }}
        className="w-[73ch] translate-x-[-2.4ch] px-[4ch] my-8"
      >
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    );
  };
}

export const Note = AdmonitionFactory("note");
export const Warning = AdmonitionFactory("warning");
export const Caution = AdmonitionFactory("caution");
export const Important = AdmonitionFactory("important");
export const Tip = AdmonitionFactory("tip");
