import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Groups } from '@screens/groups'
import { defaultTheme } from '@themes/index'
import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

export function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
