/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#da2f04",
        secondary: "#33670a",
        accent: "#fbbf24",
        background: "#fffaee",
        border: "#cccccc",
        muted: "#f3f4f6",
        pizza: {
          crust: "#ffd700",
          sauce: "#ff4136",
          glow: "rgba(255, 215, 0, 0.6)",
          text: "#2d3748",
          nameGlow: "rgba(218, 47, 4, 0.2)",
          description: "#4a5568",
          priceBg: "#fdf2f8",
          priceText: "#da2f04",
          formBg: "#fff8f5",
          inputBorder: "#ffd0c2",
          inputFocus: "#ff8562",
          label: "#4a5568",
          selectHover: "#fff0eb",
          shadow: "rgba(218, 47, 4, 0.15)",
          containerBg: "rgba(255, 255, 255, 0.95)",
          ofDay: {
            bg: "#fff5f2",
            border: "#ffb088",
            highlight: "#ff6b35",
            text: "#2d3748",
            price: "#e53e3e",
            glow: "rgba(255, 107, 53, 0.3)",
            badge: "#ff6b35",
            badgeText: "#ffffff",
          },
        },
        app: {
          bg: "#fff9f0",
          contentBg: "#ffffff",
          contentShadow: "rgba(0, 0, 0, 0.1)",
          divider: "#ffd0c2",
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        base: ["Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #da2f04, #33670a)",
        "gradient-pizza":
          "linear-gradient(to bottom right, #f59e0b, #ef4444, #da2f04)",
        "gradient-overlay":
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
        "gradient-pizza-of-day":
          "linear-gradient(135deg, #ff9a8b 0%, #ff6b35 100%)",
        "gradient-pizza-of-day-card":
          "linear-gradient(to bottom right, #fff5f2, #fff0eb)",
        "gradient-app-content": "linear-gradient(to bottom, #ffffff, #fff9f0)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Better form controls
    require("@tailwindcss/typography"), // Prose for rich text
    require("@tailwindcss/aspect-ratio"), // Responsive images/videos
  ],
};
