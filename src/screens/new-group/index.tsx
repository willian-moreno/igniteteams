import { Button } from '@components/button'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useNavigation } from '@react-navigation/native'
import { createGroup } from '@storage/group/createGroup'
import { useState } from 'react'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const navigation = useNavigation()

  const [groupTitle, setGroupTitle] = useState('')

  const isAddNewGroupButtonDisabled = groupTitle.trim().length === 0

  async function handleAddNewGroup() {
    try {
      const group = await createGroup(groupTitle)

      navigation.navigate('players', {
        group,
      })

      setGroupTitle('')
    } catch (error) {}
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
