import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'
import { ButtonIconVariantStyleProps, Container, Icon } from './styles'

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: ButtonIconVariantStyleProps
} & TouchableOpacityProps

export function ButtonIcon({ icon, variant = 'primary', ...props }: Props) {
  return (
    <Container {...props}>
      <Icon name={icon} variant={variant} />
    </Container>
  )
}
