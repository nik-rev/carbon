import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindAnimate from "tailwindcss-animate";

const alertColors = ["BLUE", "YELLOW", "TEAL", "PINK", "RED"] as const;

type AlertStyleGenerator = (color: (typeof alertColors)[number]) => string;

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

export const { overlay, inlineCode, orderedListItem, coloredText } =
  alertStyles;

const config = {
  safelist: Object.values(alertStylesArray).flat(),
  darkMode: ["class"],
  content: ["./posts/**/*.mdx", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        tiny: "480px",
      },
      maxWidth: {
        article: "656.5px",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      colors: {
        rosewater: "hsl(var(--rosewater))",
        flamingo: "hsl(var(--flamingo))",
        pink: "hsl(var(--pink))",
        mauve: "hsl(var(--mauve))",
        red: "hsl(var(--red))",
        maroon: "hsl(var(--maroon))",
        peach: "hsl(var(--peach))",
        yellow: "hsl(var(--yellow))",
        green: "hsl(var(--green))",
        teal: "hsl(var(--teal))",
        sky: "hsl(var(--sky))",
        sapphire: "hsl(var(--sapphire))",
        blue: "hsl(var(--blue))",
        lavender: "hsl(var(--lavender))",
        text: "hsl(var(--text))",
        subtext1: "hsl(var(--subtext1))",
        subtext0: "hsl(var(--subtext0))",
        overlay2: "hsl(var(--overlay2))",
        overlay1: "hsl(var(--overlay1))",
        overlay0: "hsl(var(--overlay0))",
        surface2: "hsl(var(--surface2))",
        surface1: "hsl(var(--surface1))",
        surface0: "hsl(var(--surface0))",
        base: "hsl(var(--base))",
        mantle: "hsl(var(--mantle))",
        crust: "hsl(var(--crust))",
        accent: "hsl(var(--accent))",
      },
      keyframes: {
        "bounce-right": {
          "50%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-right": "bounce-right 1s infinite",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    plugin((p) => {
      p.addUtilities({
        ".bleed": {
          "@apply -mx-4 mt-6 mb-1 md:mb-2 p-4 md:-mx-8 md:mt-8 md:p-8": {},
        },
      });
    }),
  ],
} satisfies Config;

export default config;
