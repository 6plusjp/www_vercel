const colors = require("tailwindcss/colors");

function withOpacityValue(variable, fallbackColor) {
  return ({ opacityValue }) => {
    let fallbackColorValue = "";
    if (fallbackColor) {
      fallbackColorValue = `, var(${fallbackColor})`;
    }
    if (opacityValue === undefined) {
      return `hsl(var(${variable}${fallbackColorValue}))`;
    }
    return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
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
    extend: {
      fontFamily: {
        display: ["Inter", "var(--font-body)"],
        // 'body': ['"Open Sans"'],
      },

      typography: (theme) => {
        return {
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
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
