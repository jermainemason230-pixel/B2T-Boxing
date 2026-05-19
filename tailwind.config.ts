import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0908",
        bone: "#f4f1ea",
        blood: "#c1272d",
        ash: "#1a1a1a",
        smoke: "#2a2a2a",
        paper: "#e8e3d8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        stamp: "0.2em",
        ticker: "0.15em",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
