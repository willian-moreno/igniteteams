import { Button } from '@components/button'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useTheme } from 'styled-components'
import { Container } from './styles'

type Props = {
  classId: string
}

export function Players({}: Props) {
  const { colors } = useTheme()

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />
      <Input placeholder="Nome do participante" placeholderTextColor={colors.gray_300} />
      <Button title="Remover turma" variant="secondary" />
    </Container>
  )
}
