import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/layout/GlobalStyles';
import { theme } from '../src/theme';

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
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
