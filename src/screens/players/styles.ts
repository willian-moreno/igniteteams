import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  overflow: hidden;

  width: 100%;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_700};
`
