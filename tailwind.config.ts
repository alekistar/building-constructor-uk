import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",
        gold: "#D4AF37"
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 175, 55, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
