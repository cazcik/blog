import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Source Sans 3 VF'"],
      },
    },
  },
  plugins: [],
};
export default config;
