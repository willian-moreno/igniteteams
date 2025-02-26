import { TouchableOpacityProps } from 'react-native'
import { ButtonIconVariantStyleProps, Container, Icon } from './styles'

type Props = {
  name: string
  variant?: ButtonIconVariantStyleProps
} & TouchableOpacityProps

export function ButtonIcon({ name, variant = 'primary', ...props }: Props) {
  return (
    <Container {...props}>
      <Icon name={name} variant={variant} />
    </Container>
  )
}
