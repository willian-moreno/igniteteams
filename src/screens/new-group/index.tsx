import { Button } from '@components/button'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useNavigation } from '@react-navigation/native'
import { createGroup } from '@storage/group/createGroup'
import { AppError } from '@utils/AppError'
import { useState } from 'react'
import { Alert } from 'react-native'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const navigation = useNavigation()

  const [groupTitle, setGroupTitle] = useState('')

  const isAddNewGroupButtonDisabled = groupTitle.trim().length === 0

  async function handleAddNewGroup() {
    if (groupTitle.trim().length === 0) {
      return
    }

    try {
      const group = await createGroup(groupTitle.trim())

      navigation.navigate('players', {
        group,
      })

      setGroupTitle('')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)

        return
      }

      Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.')
      console.error(error)
    }
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
