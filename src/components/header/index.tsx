import logoImg from '@assets/logo.png'

import { BackButton, BackIcon, Container, Logo } from './styles'

type Props = {
  showBackButton?: boolean
  onBackButtonPress?: () => void
}

export function Header({ showBackButton = false, onBackButtonPress = () => {} }: Props) {
  function handleOnBackButtonPress() {
    onBackButtonPress()
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleOnBackButtonPress}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
