import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        jakarta: ["var(--font-jakarta)"],
      },
      height: {
        13: "3.25rem",
      },
      colors: {
        black: "#22242C",
        "black-100": "#0D062D",
        "gray-100": "#F7F8FA",
        "gray-150": "#EDF2F6",
        "gray-200": "#DADDDD",
        "gray-300": "#E5EAEF",
        "gray-400": "#9CA4AB",
        "neutral-200": "#EBECF2",
        "neutral-400": "#898989",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-800": "#26282C",
        "stone-500": "#787486",
        "stone-600": "#3A3F51",
        "emerald-400": "#34CAA5",
        "red-400": "#ed544e",
      },
      borderRadius: {
        "1xl": "0.875rem",
        "4xl": "1.75rem",
        "7xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "100rem",
      },
    },
  },
  plugins: [],
};
export default config;
