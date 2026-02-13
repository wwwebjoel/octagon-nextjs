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
        // Header: deep navy glass
        'gradient-top-header': "linear-gradient(180deg, rgba(10, 8, 28, 0.97) 0%, rgba(6, 5, 18, 0.99) 100%)",
        // Trapezoid inactive: barely-there indigo glass
        'gradient-trapezoid-inactive': "linear-gradient(180deg, rgba(99, 102, 241, 0.07) 0%, rgba(99, 102, 241, 0.03) 43%, rgba(55, 48, 107, 0.04) 100%)",
        // Trapezoid active: cyan-to-indigo glow
        'gradient-trapezoid-active': "linear-gradient(180deg, rgba(34, 211, 238, 0.45) 0%, rgba(99, 102, 241, 0.35) 57%, rgba(99, 102, 241, 0.05) 100%)",
        // Buttons: solid indigo
        'gradient-button': "linear-gradient(180deg, #6366F1 0%, #4338CA 100%)",
        'gradient-button-purple': "linear-gradient(180deg, #6366F1 0%, #4338CA 100%)",
        // Panel boxes: dark glass with indigo tint
        'gradient-box-purple': "linear-gradient(180deg, rgba(15, 12, 40, 0.85) 0%, rgba(10, 8, 28, 0.92) 100%)",
        'gradient-round-plus': "linear-gradient(180deg, #6366F1 0%, #4338CA 100%)",
        // Slider thumb
        'gradient-slider-thumb': "linear-gradient(180deg, #6366F1 0%, #4338CA 100%)",
        'gradient-propertyBox-top-button': 'linear-gradient(180deg, rgba(99, 102, 241, 0.15) 0%, rgba(79, 70, 229, 0.1) 43%, rgba(55, 48, 107, 0.08) 100%)'
      },
      colors: {
        // Legacy names remapped to new elegant palette
        "inner-yellow": "#22D3EE",       // cyan — replaces harsh yellow
        "inner-purple": "#312E81",       // deep indigo
        "inner-orange": "#6366F1",       // indigo — replaces orange
        "inner-purple2": "#6366F1",      // indigo
        "inner-carnationPink": "#A5B4FC",// soft lavender — replaces hot pink
        // Portfolio design tokens
        "portfolio-bg": "#06050F",
        "portfolio-indigo": "#6366F1",
        "portfolio-indigo-deep": "#4338CA",
        "portfolio-lavender": "#A5B4FC",
        "portfolio-cyan": "#22D3EE",
        "portfolio-slate": "#94A3B8",
        "portfolio-gold": "#FBBF24",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(99, 102, 241, 0.45)",
          "0 0px 65px rgba(34, 211, 238, 0.2)"
        ]
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
