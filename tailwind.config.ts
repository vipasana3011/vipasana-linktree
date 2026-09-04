import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080a",
        foreground: "#ededed",
        gold: {
          50: "#fdfbf7",
          100: "#f9f4e8",
          200: "#f3e7c4",
          300: "#edd598",
          400: "#e5c07b",
          500: "#d4af37", // classic metallic gold
          600: "#b8902b",
          700: "#936e22",
          800: "#6d501b",
          900: "#493512",
        },
        rosegold: {
          light: "#FBEAEB",
          DEFAULT: "#B76E79",
          dark: "#8F4E58",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3E7C4 0%, #D4AF37 50%, #AA771C 100%)",
        "rainbow-glow": "linear-gradient(90deg, rgba(255,107,107,0.15), rgba(255,230,109,0.15), rgba(78,205,196,0.15), rgba(199,125,255,0.15))",
        "glass-panel": "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 40px rgba(212, 175, 55, 0.4)",
        "prism-glow": "0 10px 40px -10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(183, 110, 121, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
