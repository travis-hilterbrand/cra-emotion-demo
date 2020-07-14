import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import './App.css';
import DynamicComponent from './DynamicComponent';
import StyledComponent from './StyledComponent';
import TestComponent from './TestComponent';
import ThemedComponent from './ThemedComponent';

const OuterTheme = {
  accentColor: 'hotpink',
  colors: {
    primary: 'green',
    outerColor: 'red',
  },
  outerProp: 'blue',
};
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={OuterTheme}>
        <ThemedComponent />
      </ThemeProvider>
      <hr />
      <TestComponent />
      <hr />
      <StyledComponent />
      <hr />
      <DynamicComponent />
    </div>
  );
}

export default App;
