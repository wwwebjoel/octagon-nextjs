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
        'gradient-top-header': "linear-gradient(180deg, rgba(160, 107, 228, 0.6) 13%, rgba(86, 74, 141, 0.6) 71%)",
        'gradient-trapezoid-inactive': "linear-gradient(180deg, rgba(254, 121, 249, 0.6) 0%, rgba(160, 107, 228, 0.6) 43%, rgba(86, 74, 141, 0.6) 100%)",
        'gradient-trapezoid-active': "linear-gradient(180deg, rgba(255, 172, 1, 0.6) 0%, rgba(255, 245, 0, 0.6) 57%, rgba(255, 245, 0, 0.06) 100%)",
        'gradient-button-purple': "linear-gradient(180deg, rgba(254, 121, 249, 0.6) 25%, rgba(160, 107, 228, 0.6) 50%, rgba(86, 74, 141, 0.6) 100%)",
        'gradient-box-purple': "linear-gradient(180deg, rgba(254, 121, 249, 0.6) 25%, rgba(160, 107, 228, 0.6) 50%, rgba(86, 74, 141, 0.6) 100%)",
        'gradient-round-plus': "linear-gradient(180deg, rgba(254, 121, 249, 0.6) 25%, rgba(160, 107, 228, 0.6) 50%, rgba(86, 74, 141, 0.6) 100%)"
},
      colors: {
        "inner-yellow": "#FFF500",
        "inner-purple": "#4E3D82",
        "inner-orange": "#E37C00",
        "inner-purple2": "#9D53E7",
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
