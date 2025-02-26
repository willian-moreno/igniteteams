import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

type Props = {
  title: string
} & TouchableOpacityProps

export function GroupCard({ title, ...props }: Props) {
  return (
    <Container {...props}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
