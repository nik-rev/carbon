import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      },
      backgroundImage: {
        "highlight-gradient":
          "linear-gradient(45deg, hsl(30deg 98% 61%) 0%, hsl(33deg 100% 60%) 11%, hsl(36deg 100% 59%) 22%, hsl(39deg 100% 58%) 33%, hsl(42deg 100% 57%) 44%, hsl(45deg 100% 56%) 56%, hsl(47deg 100% 54%) 67%, hsl(50deg 100% 53%) 78%, hsl(53deg 100% 51%) 89%, hsl(55deg 100% 50%) 100%);",
        "dark-highlight-gradient":
          "linear-gradient(45deg, hsl(30deg 94% 20%) 0%, hsl(28deg 97% 20%) 11%, hsl(27deg 99% 20%) 22%, hsl(25deg 100% 20%) 33%, hsl(23deg 100% 21%) 44%, hsl(21deg 100% 21%) 56%, hsl(19deg 100% 22%) 67%, hsl(17deg 100% 22%) 78%, hsl(15deg 100% 22%) 89%, hsl(12deg 100% 23%) 100%);",
        "dark-gold-gradient":
          "linear-gradient(45deg, hsl(35deg 100% 47%) 0%, hsl(36deg 100% 47%) 5%, hsl(36deg 100% 47%) 10%, hsl(37deg 100% 47%) 14%, hsl(38deg 100% 47%) 19%, hsl(38deg 100% 47%) 24%, hsl(39deg 100% 47%) 29%, hsl(40deg 100% 47%) 33%, hsl(40deg 100% 47%) 38%, hsl(41deg 100% 47%) 43%, hsl(42deg 100% 47%) 48%, hsl(42deg 100% 47%) 52%, hsl(43deg 100% 47%) 57%, hsl(44deg 100% 47%) 62%, hsl(45deg 100% 47%) 67%, hsl(45deg 100% 47%) 71%, hsl(46deg 100% 47%) 76%, hsl(47deg 100% 47%) 81%, hsl(48deg 100% 47%) 86%, hsl(48deg 100% 47%) 90%, hsl(49deg 100% 47%) 95%, hsl(50deg 100% 46%) 100%)",
        "light-gold-gradient":
          "linear-gradient(45deg, hsl(35deg 100% 57%) 0%, hsl(36deg 100% 57%) 5%, hsl(38deg 100% 57%) 10%, hsl(39deg 100% 57%) 14%, hsl(40deg 100% 57%) 19%, hsl(41deg 100% 57%) 24%, hsl(42deg 100% 57%) 29%, hsl(43deg 100% 57%) 33%, hsl(45deg 100% 57%) 38%, hsl(46deg 100% 57%) 43%, hsl(47deg 100% 57%) 48%, hsl(48deg 100% 57%) 52%, hsl(49deg 100% 58%) 57%, hsl(50deg 100% 58%) 62%, hsl(51deg 100% 58%) 67%, hsl(52deg 100% 59%) 71%, hsl(54deg 100% 59%) 76%, hsl(55deg 100% 60%) 81%, hsl(56deg 100% 61%) 86%, hsl(58deg 99% 61%) 90%, hsl(59deg 98% 61%) 95%, hsl(61deg 100% 63%) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;

export default config;
