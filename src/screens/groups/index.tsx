import { Group } from '@@types/group'
import { Button } from '@components/button'
import { GroupCard } from '@components/group-card'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { ListEmpty } from '@components/list-empty'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

  const navigation = useNavigation()

  function handleNavigateToNewGroupScreen() {
    navigation.navigate('new-group')
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupCard title={item.title} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />
      <Button title="Criar nova turma" onPress={handleNavigateToNewGroupScreen} />
    </Container>
  )
}
