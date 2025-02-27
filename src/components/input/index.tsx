import React, { RefObject } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Container } from './styles'

type Props = {
  inputRef?: RefObject<TextInput>
} & TextInputProps

export function Input({ inputRef, ...props }: Props) {
  const { colors } = useTheme()

  return <Container ref={inputRef} placeholderTextColor={colors.gray_300} {...props}></Container>
}
