import { Button } from '@components/button'
import { ButtonIcon } from '@components/button-icon'
import { Filter } from '@components/filter'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useMemo, useState } from 'react'
import { FlatList } from 'react-native'
import uuid from 'react-native-uuid'
import { useTheme } from 'styled-components'
import { Container, HeaderList, InputContainer, NumberOfPlayers } from './styles'

type Props = {
  classId: string
}

type Player = {
  id: string
  name: string
}

type Team = {
  id: string
  title: string
  players: Player[]
}

export function Players({}: Props) {
  const { colors } = useTheme()
  const [teams, setTeams] = useState<Team[]>([
    { id: 'team-a', title: 'Time A', players: [{ id: uuid.v4(), name: 'Will' }] },
    { id: 'team-b', title: 'Time B', players: [] },
  ])
  const [activeTeamId, setActiveTeamId] = useState('team-a')
  const numberOfActiveTeamPlayers = useMemo(() => {
    return teams.find((team) => team.id === activeTeamId)?.players.length
  }, [teams, activeTeamId])

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
      <HeaderList>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Filter
              title={item.title}
              isActive={item.id === activeTeamId}
              onPress={() => setActiveTeamId(item.id)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{numberOfActiveTeamPlayers}</NumberOfPlayers>
      </HeaderList>
      <Button title="Remover turma" variant="secondary" style={{ marginTop: 20 }} />
    </Container>
  )
}
