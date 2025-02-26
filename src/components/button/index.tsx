import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Text } from './styles'

type Props = {
  title: string
  variant?: ButtonTypeStyleProps
} & TouchableOpacityProps

export function Button({ title, variant = 'primary', ...props }: Props) {
  return (
    <Container variant={variant} {...props}>
      <Text>{title}</Text>
    </Container>
  )
}
