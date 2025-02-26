import { GroupCard } from '@components/group-card'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { useState } from 'react'
import { FlatList } from 'react-native'
import uuid from 'react-native-uuid'
import { Container } from './styles'

type Group = {
  id: string
  title: string
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: uuid.v4(),
      title: 'Rocketseat One React Native',
    },
  ])

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupCard title={item.title} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
