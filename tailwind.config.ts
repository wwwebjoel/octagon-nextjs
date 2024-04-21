import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "inner-yellow": "#FFF500",
        "inner-purple": "#4E3D82",
      },
      zIndex: {
        'point': '100',
        'line': '90',
        'gapLine': '90',
        'trapezoid': '80',
      }
    },
  },
  plugins: [],
};
export default config;
