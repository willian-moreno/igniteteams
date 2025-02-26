import styled, { css } from 'styled-components/native'

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

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};
`
