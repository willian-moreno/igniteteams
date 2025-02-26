import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

type Props = {
  title: string
  isActive?: boolean
} & TouchableOpacityProps

export function Filter({ title, isActive = false, ...props }: Props) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
