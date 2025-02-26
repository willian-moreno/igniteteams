import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;

  padding: 16px;
  margin-bottom: 20px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_700};
  color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font_family.regular};
`
