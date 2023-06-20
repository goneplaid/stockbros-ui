/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "stage-1": "url('/images/backgrounds/stage-1.png')",
        "stage-2": "url('/images/backgrounds/stage-2.png')",
        "stage-3": "url('/images/backgrounds/stage-3.png')",
        "stage-4": "url('/images/backgrounds/stage-4.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        subheading: ["var(--font-subheading)"],
        "secondary-heading": ["var(--font-secondary-heading)"],
        primary: ["var(--font-primary)"],
      },
    },
  },
  plugins: [],
};
