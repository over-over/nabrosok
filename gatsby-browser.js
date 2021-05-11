import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, light } from './src/ui/theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)