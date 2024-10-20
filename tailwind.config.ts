import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["ui-monospace", "Fira Code"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          1: "#10180E",
          2: "#011627",
          3: "#011221",
        },
        secondary: {
          1: "#607B96",
          2: "#3C9D93",
          3: "#4D5BCE",
        },
        accent: {
          1: "#FEA55F",
          2: "#43D9AD",
          3: "#E99287",
          4: "#C98BDF",
          5: "#3A49A4",
        },
        ash: "#1E2D3D",
      },
    },
  },
  plugins: [],
};
export default config;
