import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#E8590C",
          amber: "#F6A028",
          dark: "#2A1B12",
          darker: "#1E120C",
          cream: "#FDF6EC",
          gold: "#E5A84B",
          terracotta: "#D94A1E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Neue Haas Grotesk", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glass: "0 20px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        pill: "0 10px 25px rgba(0, 0, 0, 0.2)",
        glow: "0 0 50px rgba(246, 160, 40, 0.25)",
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
