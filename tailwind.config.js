/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#da2f04", // Rich orange-red
        secondary: "#33670a", // Earthy green
        background: "#fffaee", // Creamy background
        border: "#cccccc",
        accent: "#fbbf24", // Warm yellow
        muted: "#f3f4f6",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        base: ["Arial", "sans-serif"],
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        card: "0 10px 20px rgba(0, 0, 0, 0.08)",
        glow: "0 0 15px rgba(218, 47, 4, 0.6)",
      },
      backgroundImage: {
        "pizza-pattern": "url('/public/pizza-bg.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Better form controls
    require("@tailwindcss/typography"), // Prose for rich text
    require("@tailwindcss/aspect-ratio"), // Responsive images/videos
  ],
};
