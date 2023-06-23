/** @type {import('tailwindcss').Config} */

const gameboardColors = {
  gameboard: "rgba(74, 83, 91, 1)",
  "tile-neutral": "rgba(149, 162, 174, 1)",
  "tile-yellow": "rgba(246, 227, 51, 1)",
  "tile-red": "rgba(255, 51, 100, 1)",
  "tile-blue": "rgba(7, 151, 255, 1)",
  "tile-orange": "rgba(255, 153, 0, 1)",
  "tile-green": "rgba(50, 241, 46, 1)",
  "tile-purple": "rgba(209, 79, 255, 1)",
  "tile-cyan": "rgba(0, 255, 255, 1)",
};

const earlyStageThemeColors = {
  primary: "rgba(19, 62, 81, 1)",
  secondary: "rgba(121, 121, 121, 1)",
  accent: "rgba(175, 237, 252, 1)",
  neutral: "rgba(2, 3, 12, 1)",
  "base-100": "rgba(104, 206, 253, 1)",
  info: "rgba(171, 215, 255, 1)",
  success: "rgba(74, 222, 128, 1)",
  warning: "rgba(254, 240, 138, 1)",
  error: "rgba(236, 72, 153, 1)",
};

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
        ...gameboardColors,
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
          ...earlyStageThemeColors,
          ...gameboardColors,
        },
      },
    ],
  },
};
