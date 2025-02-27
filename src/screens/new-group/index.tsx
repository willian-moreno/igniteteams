import { Button } from '@components/button'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import uuid from 'react-native-uuid'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const navigation = useNavigation()

  const [groupTitle, setGroupTitle] = useState('')

  const isAddNewGroupButtonDisabled = groupTitle.trim().length === 0

  function handleAddNewGroup() {
    navigation.navigate('players', {
      group: {
        id: uuid.v4(),
        title: groupTitle,
      },
    })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input value={groupTitle} placeholder="Nome da turma" onChangeText={setGroupTitle} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          disabled={isAddNewGroupButtonDisabled}
          onPress={handleAddNewGroup}
        />
      </Content>
    </Container>
  )
}
