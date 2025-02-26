import { Button } from '@components/button'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header showBackButton onBackButtonPress={handleGoBack} />
      <Content>
        <Icon />
        <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
