import { Groups } from '@screens/groups'
import { theme } from '@themes/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
        <Groups></Groups>
      </ThemeProvider>
    </>
  )
}
