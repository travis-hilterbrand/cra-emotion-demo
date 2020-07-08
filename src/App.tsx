import React from 'react';
import './App.css';

import DynamicComponent from './DynamicComponent';
import StyledComponent from './StyledComponent';
import TestComponent from './TestComponent';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <div className="App">
      <ThemedComponent />
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
