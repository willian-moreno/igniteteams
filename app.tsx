import { Groups } from '@screens/groups'
import { StatusBar } from 'react-native'

export function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      <Groups></Groups>
    </>
  )
}
