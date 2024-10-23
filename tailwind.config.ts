import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#100f12",
        black: "#000000",
        crimson: "#ac1b1b",
        gray: "#6d6d6e"
      }
    },
  },
  plugins: [],
};
export default config;
