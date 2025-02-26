import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  padding: 24px;
  width: 100%;
  height: 90px;
  border-radius: 6px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.colors.gray_500};
`

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 2,
}))`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};

    color: ${theme.colors.gray_200};
  `};
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.green_700,
  weight: 'fill',
}))`
  margin-right: 20px;
`
