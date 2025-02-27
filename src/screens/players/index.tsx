import { Button } from '@components/button'
import { ButtonIcon } from '@components/button-icon'
import { Filter } from '@components/filter'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { ListEmpty } from '@components/list-empty'
import { PlayerCard } from '@components/player-card'
import { useTeams } from '@hooks/useTeams'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList } from 'react-native'
import uuid from 'react-native-uuid'
import { useTheme } from 'styled-components'
import { Container, HeaderList, InputContainer, NumberOfPlayers } from './styles'

type RouteParams = {
  group: {
    id: string
    title: string
  }
}

export function Players() {
  const route = useRoute()

  const { group } = route.params as RouteParams

  const { colors } = useTheme()

  const {
    teams,
    activeTeamId,
    activeTeamPlayers,
    numberOfActiveTeamPlayers,
    updateActiveTeamId,
    addPlayerInActiveTeam,
    removePlayerFromActiveTeam,
  } = useTeams({
    defaultTeams: [
      { id: 'team-a', title: 'Time A', players: [] },
      { id: 'team-b', title: 'Time B', players: [] },
    ],
  })

  const [playerName, setPlayerName] = useState('')
  const isAddPlayerButtonDisabled = playerName.trim().length === 0

  function handleSetActiveTeamId(teamId: string) {
    updateActiveTeamId(teamId)
  }

  function handleAddPlayerInActiveTeam() {
    addPlayerInActiveTeam({
      id: uuid.v4(),
      name: playerName,
    })

    setPlayerName('')
  }

  function handleRemovePlayerFromActiveTeam(playerId: string) {
    removePlayerFromActiveTeam(playerId)
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group.title} subtitle="adicione a galera e separe os times" />
      <InputContainer>
        <Input
          value={playerName}
          placeholder="Nome do participante"
          placeholderTextColor={colors.gray_300}
          autoCorrect={false}
          onChangeText={setPlayerName}
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayerInActiveTeam}
          disabled={isAddPlayerButtonDisabled}
        />
      </InputContainer>
      <HeaderList>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Filter
              title={item.title}
              isActive={item.id === activeTeamId}
              onPress={() => handleSetActiveTeamId(item.id)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{numberOfActiveTeamPlayers}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={activeTeamPlayers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemovePress={() => handleRemovePlayerFromActiveTeam(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          numberOfActiveTeamPlayers === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time." />}
      />
      <Button title="Remover turma" variant="secondary" style={{ marginTop: 20 }} />
    </Container>
  )
}
