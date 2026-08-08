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
        cream: {
          50: "#FAF8F4",
          100: "#F4EFEA",
          200: "#E9DFD3",
          300: "#D9CBB9",
        },
        ink: {
          900: "#1A1A2E",
          800: "#2B2B40",
          700: "#3D3D56",
          600: "#5A5A72",
          400: "#8A8A9E",
        },
        terracotta: {
          DEFAULT: "#C75B39",
          hover: "#B04A2A",
          light: "#F9ECE8",
          muted: "#D98064",
        },
        brass: {
          DEFAULT: "#B08D57",
          light: "#F5EFE4",
          dark: "#8C6C39",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(26, 26, 46, 0.05)",
        card: "0 20px 40px -15px rgba(26, 26, 46, 0.08)",
        elevated: "0 25px 50px -12px rgba(199, 91, 57, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
