import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterStyleProps = {
  isActive: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 38px;
  max-height: 38px;
  border-radius: 4px;
  margin-right: 12px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green_700};
    `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    text-transform: uppercase;
    color: ${theme.colors.white};
  `}
`
