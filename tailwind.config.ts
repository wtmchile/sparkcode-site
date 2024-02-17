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
        "star-pattern": "url('/images/estrellas-fondo.svg')",
      },
      colors: {
        "dark-purple": "#272039",
        "light-purple": "#a586fc",
        primary: "#6e0584",
        secondary: "#35103c",
      },
      fontSize: {
        "clamp-xl": "clamp(2.25rem, 8vw, 3.75rem)",
      },
      animation: {
        flip: "flip 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        flip: {
          from: { transform: "rotateX(0deg)", transformOrigin: "50% bottom " },
          to: { transform: "rotateX(180deg)", transformOrigin: "50% bottom " },
        },
      },
    },
  },
  plugins: [],
};
export default config;
