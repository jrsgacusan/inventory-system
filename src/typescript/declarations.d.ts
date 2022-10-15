import 'styled-components';
import {DefaultTheme} from '@mui/system'

declare module '*.png';
declare module '*.svg';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme
}
