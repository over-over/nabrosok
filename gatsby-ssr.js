// Wraps every page in a component
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, light } from './src/ui/theme';

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)