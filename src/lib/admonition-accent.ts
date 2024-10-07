const alertColors = ["BLUE", "YELLOW", "TEAL", "PINK", "RED"] as const;

export const alertAccent = alertColors.flatMap((color) => {
  const lowerColor = color.toLowerCase();
  return [
    color,
    `border-l-${lowerColor}`,
    `text-${lowerColor}`,
    `bg-${lowerColor}/5`,
  ];
});

export type AlertColor = (typeof alertColors)[number];

type AlertStyleGenerator = (color: AlertColor) => string;

const alertStylesFunctions: Record<string, AlertStyleGenerator> = {
  /**
   * Tinted background color, e.g. in code blocks
   */
  overlay: (color) => `group-[.${color}]:before:bg-${color.toLowerCase()}/5`,

  /**
   * Inline code that is also a link
   */
  inlineCode: (color) =>
    `group-[.${color}]:group-hover/link:border-b-${color.toLowerCase()}`,

  /**
   * Numbers before each list item in ordered lists
   */
  orderedListItem: (color) =>
    `group-[.${color}]:marker:text-${color.toLowerCase()}`,

  /**
   * Text within an admonition, such as text within links
   */
  coloredText: (color) => `group-[.${color}]:text-${color.toLowerCase()}`,

  /**
   * Colored underline for links, change color to support transition
   */
  hoverDecoration: (color) =>
    `group-[.${color}]:hover:decoration-${color.toLowerCase()}`,
};

/**
 * Values is array of tailwind classes corresponding to a particular purpose
 * For example, to make some text within an admonition inherit its accent color, we have something like:
 *
 * ["group-[.BLUE]:text-blue", "group-[.RED]:text-red", ...]
 */
export const alertStylesArray: Record<
  keyof typeof alertStylesFunctions,
  string[]
> = Object.fromEntries(
  Object.entries(alertStylesFunctions).map(([styleName, styleGenerator]) => [
    styleName,
    alertColors.map((color) => styleGenerator(color)),
  ]),
);

const alertStyles: Record<keyof typeof alertStylesFunctions, string> =
  Object.fromEntries(
    Object.entries(alertStylesArray).map(([styleName, styles]) => [
      styleName,
      styles.join(" "),
    ]),
  );

export const {
  overlay,
  inlineCode,
  orderedListItem,
  coloredText,
  hoverDecoration,
} = alertStyles;
