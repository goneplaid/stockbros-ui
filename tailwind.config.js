/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: ["var(--font-heading)"],
      subheading: ["var(--font-subheading)"],
      "secondary-heading": ["var(--font-secondary-heading)"],
      primary: ["var(--font-primary)"],
    },
    extend: {
      colors: {
        primary: "#133E51",
        secondary: "#02030C",
        tertiary: "#797979",
        brand: "#68CEFD",
      },
      backgroundImage: {
        "stage-1": "url('/images/backgrounds/stage-1.png')",
        "stage-2": "url('/images/backgrounds/stage-2.png')",
        "stage-3": "url('/images/backgrounds/stage-3.png')",
        "stage-4": "url('/images/backgrounds/stage-4.png')",
      },
    },
  },
  plugins: [],
};
