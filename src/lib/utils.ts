import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractTextFromChildren = (childrenOrText, text = "") => {
  if (childrenOrText === null) {
    return text;
  }

  if (typeof childrenOrText === "string") {
    return extractTextFromChildren(null, text.concat(childrenOrText));
  }

  if ("props" in childrenOrText && "children" in childrenOrText.props) {
    return extractTextFromChildren(childrenOrText.props.children, text);
  }

  if (Array.isArray(childrenOrText)) {
    return childrenOrText.reduce(
      (textFromArray, childOrText) =>
        textFromArray.concat(extractTextFromChildren(childOrText)),
      text,
    );
  }
};
