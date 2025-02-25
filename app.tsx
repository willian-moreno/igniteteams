import { Groups } from '@screens/groups'
import { defaultTheme } from '@themes/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      <Groups></Groups>
    </ThemeProvider>
  )
}
