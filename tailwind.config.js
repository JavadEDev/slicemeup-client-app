/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        card: "0 10px 20px rgba(0, 0, 0, 0.08)",
        glow: "0 0 15px rgba(218, 47, 4, 0.6)",
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
