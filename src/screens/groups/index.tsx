import { Group } from '@@types/group'
import { Button } from '@components/button'
import { GroupCard } from '@components/group-card'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { ListEmpty } from '@components/list-empty'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { findAllGroups } from '@storage/group/findAllGroups'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

  const navigation = useNavigation()

  async function fetchGroups() {
    try {
      const data = await findAllGroups()

      setGroups(data)
    } catch (error) {
      console.error(error)
    }
  }

  function handleNavigateToNewGroupScreen() {
    navigation.navigate('new-group')
  }

  function handleNavigateToGroupTeams(group: Group) {
    navigation.navigate('players', {
      group,
    })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupCard title={item.title} onPress={() => handleNavigateToGroupTeams(item)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />
      <Button title="Criar nova turma" onPress={handleNavigateToNewGroupScreen} />
    </Container>
  )
}
