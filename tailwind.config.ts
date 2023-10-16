import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Source Sans 3 VF'"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
