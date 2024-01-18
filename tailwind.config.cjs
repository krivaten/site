const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
    "./node_modules/@flowershow/core/dist/*.js",
    "./node_modules/@flowershow/core/*.js",
  ],
  darkMode: "media",
  theme: {
    extend: {
      // support wider width for large screens >1440px eg. in hero
      maxWidth: {
        "8xl": "88rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
        headings: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: {
          DEFAULT: "#F9F7F0",
          dark: "#202121",
        },
        text: {
          DEFAULT: "#202121",
          dark: "#d3d7da",
        },
        brand: {
          DEFAULT: "#D1461E",
          50: "#fdf6f4",
          100: "#faede9",
          200: "#f4d1c7",
          300: "#edb5a5",
          400: "#df7e62",
          500: "#d1461e",
          600: "#bc3f1b",
          700: "#9d3517",
          800: "#7d2a12",
          900: "#66220f",
        },
        ...require("tailwindcss/colors"),
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#202121",
            "iframe[src*='youtube.com']": {
              aspectRatio: "16/9",
              width: "100%",
              height: "auto",
              border: "none",
            },
          },
        },
        dark: {
          css: {
            color: "#d3d7da",
          },
        },
      },
    },
  },
  /* eslint global-require: off */
  plugins: [require("@tailwindcss/typography")],
};
