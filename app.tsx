import { Loading } from '@components/loading'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Routes } from '@routes/index'
import { defaultTheme } from '@themes/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

export function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
