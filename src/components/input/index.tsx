import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Container } from './styles'

type Props = {} & TextInputProps

export function Input({ ...props }: Props) {
  const { colors } = useTheme()

  return <Container placeholderTextColor={colors.gray_300} {...props}></Container>
}
