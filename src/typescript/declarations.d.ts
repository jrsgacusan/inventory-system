import 'styled-components';
import { ThemeType } from './App';

declare module '*.png';
declare module '*.svg';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType
}
