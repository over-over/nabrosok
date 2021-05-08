import { getSpacing } from './helpers';

export const light = {
  name: 'light',
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  palette: {
    primary: {
      dark: '#b28704',
      main: '#ffc107',
      light: '#ffcd38',
    },
    secondary: {
      dark: '#ab003c',
      main: '#f50057',
      light: '#f73378',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  spacing: getSpacing,
};

export type TAppTheme = typeof light;