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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        earlystage: {
          primary: "rgba(19, 62, 81, 1)",
          secondary: "rgba(121, 121, 121, 1)",
          accent: "rgba(175, 237, 252, 1)",
          neutral: "rgba(2, 3, 12, 1)",
          "base-100": "rgba(104, 206, 253, 1)",
          info: "#bbf7d0",
          success: "#4ade80",
          warning: "#fef08a",
          error: "#ec4899",
        },
      },
    ],
  },
};
