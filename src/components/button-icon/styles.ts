import { ThemeType } from '@@types/styled'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonIconVariantStyleProps = 'primary' | 'secondary'

type Props = {
  variant: ButtonIconVariantStyleProps
}

const variants: (theme: ThemeType) => Record<ButtonIconVariantStyleProps, string | number> = (
  theme,
) => ({
  primary: theme.colors.green_700,
  secondary: theme.colors.red_dark,
})

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  margin-left: 12px;
  border-radius: 6px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
  size: 24,
  color: variants(theme)[variant],
}))``
