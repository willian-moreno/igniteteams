import { Button } from '@components/button'
import { ButtonIcon } from '@components/button-icon'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useTheme } from 'styled-components'
import { Container, InputContainer } from './styles'

type Props = {
  classId: string
}

export function Players({}: Props) {
  const { colors } = useTheme()

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />
      <InputContainer>
        <Input
          placeholder="Nome do participante"
          placeholderTextColor={colors.gray_300}
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </InputContainer>
      <Button title="Remover turma" variant="secondary" style={{ marginTop: 20 }} />
    </Container>
  )
}
