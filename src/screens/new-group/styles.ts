import { UsersThree } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.green_700,
}))`
  align-self: center;
`
