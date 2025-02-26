import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;

  padding: 16px;
  margin-bottom: 20px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_700};
    color: ${theme.colors.white};

    font-size: ${theme.font_size.md};
    font-family: ${theme.font_family.regular};
  `};
`
