import { StatusBar } from 'react-native'
import { Groups } from './src/screens/groups'

export function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      <Groups></Groups>
    </>
  )
}
