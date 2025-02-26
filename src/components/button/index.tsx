import { TouchableOpacityProps } from 'react-native'
import { ButtonVariantStyleProps, Container, Text } from './styles'

type Props = {
  title: string
  variant?: ButtonVariantStyleProps
} & TouchableOpacityProps

export function Button({ title, variant = 'primary', ...props }: Props) {
  return (
    <Container variant={variant} {...props}>
      <Text>{title}</Text>
    </Container>
  )
}
