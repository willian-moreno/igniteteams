import { defaultTheme } from '@themes/index'
import 'styled-components/native'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
