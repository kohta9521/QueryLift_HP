import type { Preview } from "@storybook/react";

// グローバルCSS
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs", "autodocs"],
};

export default preview;
