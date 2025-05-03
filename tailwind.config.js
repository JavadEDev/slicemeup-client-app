/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/forms"), // Better form controls
    require("@tailwindcss/typography"), // Prose for rich text
    require("@tailwindcss/aspect-ratio"), // Responsive images/videos
  ],
}
