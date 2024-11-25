import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        back: "#F7F7F7",
        whitness:"#FFFFFF",
        blackness:"#000000",
        smoke:" #F7F7F7"

      },
    },
  },
  plugins: [],
} satisfies Config;
