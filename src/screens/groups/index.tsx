import { GroupCard } from '@components/group-card'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { ListEmpty } from '@components/list-empty'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'

type Group = {
  id: string
  title: string
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

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
    </Container>
  )
}
