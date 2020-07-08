/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  padding: {
    standard: 32,
  },
  colors: {
    primary: 'hotpink',
  },
};

const ThemedComponent = () => (
  <ThemeProvider theme={theme}>
    <div css={(theme) => ({ padding: theme.padding.standard, color: theme.colors.primary })}>Hover to change color</div>
  </ThemeProvider>
);

export default ThemedComponent;
