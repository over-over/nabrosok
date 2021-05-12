import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, light } from './src/ui/theme';

// this is a hack to fix missing styles on refresh in production
// reference: https://github.com/gatsbyjs/gatsby/issues/17676#issuecomment-535796737
export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
