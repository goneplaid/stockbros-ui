import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

/* TODO: update import to your tailwind styles file */
import "../app/theme/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "Early Stage", dataTheme: "early-stage", color: "#00755e" },
        { name: "Candy", dataTheme: "candy", color: "#ffb7d5" },
        { name: "Rose", dataTheme: "rose", color: "#ff007f" },
      ],
    },
  },
};

export default preview;
