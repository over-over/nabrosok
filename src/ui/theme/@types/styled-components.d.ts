import 'styled-components';
import type { TAppTheme } from '@ui/theme';

declare module 'styled-components' {
  type StyledComponentTheme = TAppTheme;

  export interface DefaultTheme extends StyledComponentTheme {}
}
