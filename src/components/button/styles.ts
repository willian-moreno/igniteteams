import { ThemeType } from '@@types/styled'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type Props = {
  variant: ButtonTypeStyleProps
}

const variants: (theme: ThemeType) => Record<ButtonTypeStyleProps, string | number> = (theme) => ({
  primary: theme.colors.green_700,
  secondary: theme.colors.red_dark,
})

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;

  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme, variant }) => variants(theme)[variant]};
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
`
