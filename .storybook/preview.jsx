import { Global } from '@emotion/react';
import { GlobalStyle } from '../src/shared/global';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../src/shared/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
        <ThemeProvider theme={muiTheme}>
          <Global styles={GlobalStyle} />
          <Story />
        </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;