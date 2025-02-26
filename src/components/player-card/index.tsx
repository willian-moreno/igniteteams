import { ButtonIcon } from '@components/button-icon'
import { Container, Icon, Name } from './styles'

type Props = {
  name: string
  onRemovePress: () => void
}

export function PlayerCard({ name, onRemovePress }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="remove" variant="secondary" onPress={onRemovePress} />
    </Container>
  )
}
