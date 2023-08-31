import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

interface IOpacityItem {
  opacityVariable: string;
  opacityValue?: number;
}

type Conf =
  | Config
  | {
      theme: {
        extend: {
          colors: {
            info: ({ opacityValue }: IOpacityItem) => string;
            success: ({ opacityValue }: IOpacityItem) => string;
            warning: ({ opacityValue }: IOpacityItem) => string;
            error: ({ opacityValue }: IOpacityItem) => string;
          };
        };
      };
    };

function withOpacityValue(variable: string) {
  return ({ opacityValue }: IOpacityItem) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`;
    }
    return `hsl(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "var(--color-white)",
        black: "var(--color-black)",
        info: withOpacityValue("--color-info"),
        success: withOpacityValue("--color-success"),
        warning: withOpacityValue("--color-warning"),
        error: withOpacityValue("--color-error"),
        base: {
          100: "var(--color-base-100)",
          200: "var(--color-base-200)",
          300: "var(--color-base-300)",
          400: "var(--color-base-400)",
          500: "var(--color-base-500)",
          600: "var(--color-base-600)",
          700: "var(--color-base-700)",
          800: "var(--color-base-800)",
          900: "var(--color-base-900)",
        },
        bp: "var(--bg-primary)",
        bs: "var(--bg-secondary)",
        tp: "var(--text-primary)",
        ts: "var(--text-secondary)",
        hp: "var(--highlight-primary)",
        hs: "var(--highlight-secondary)",
        slate: colors.slate,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
      },

      fontFamily: {
        display: ["Inter", "var(--font-body)"],
      },

      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: [
            {
              a: {
                textDecoration: "none",
                color: "var(--highlight-primary)",
              },
              "a:hover,a:focus": {
                textDecoration: "underline",
                outline: "none",
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [typography, aspectRatio],
} satisfies Conf;
