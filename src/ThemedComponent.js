/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider, useTheme } from 'emotion-theming';

const InnerTheme = {
  padding: {
    standard: 32,
  },
  accentColor: 'hotpink',
  colors: {
    primary: 'hotpink',
  },
};

const Child = () => {
  const theme = useTheme();
  console.log('theme', theme);
  return <div css={{ padding: theme.padding.standard, color: theme.accentColor }}>Themed component</div>;
};

const ThemedComponent = () => (
  <ThemeProvider theme={InnerTheme}>
    <Child />
  </ThemeProvider>
);

export default ThemedComponent;
