import { Button } from '@components/button'
import { ButtonIcon } from '@components/button-icon'
import { Filter } from '@components/filter'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { ListEmpty } from '@components/list-empty'
import { PlayerCard } from '@components/player-card'
import { useMemo, useState } from 'react'
import { FlatList } from 'react-native'
import uuid from 'react-native-uuid'
import { useTheme } from 'styled-components'
import { Container, HeaderList, InputContainer, NumberOfPlayers } from './styles'

type Props = {}

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

  const [playerName, setPlayerName] = useState('')

  const [teams, setTeams] = useState<Team[]>([
    { id: 'team-a', title: 'Time A', players: [] },
    { id: 'team-b', title: 'Time B', players: [] },
  ])

  const [activeTeamId, setActiveTeamId] = useState('team-a')

  const activeTeamPlayers = useMemo(() => {
    return teams.find((team) => team.id === activeTeamId)?.players
  }, [teams, activeTeamId])

  const numberOfActiveTeamPlayers = useMemo(() => activeTeamPlayers?.length, [teams, activeTeamId])

  const isAddPlayerButtonDisabled = playerName.trim().length === 0

  function handleAddPlayerInActiveTeam() {
    setTeams((state) => {
      const activeTeamIndex = state.findIndex((team) => team.id === activeTeamId)

      const playerAlreadyExists =
        state[activeTeamIndex].players.findIndex((player) => player.name === playerName) !== -1

      if (playerAlreadyExists) {
        return state
      }

      state[activeTeamIndex].players.push({
        id: uuid.v4(),
        name: playerName,
      })

      return [...state]
    })

    setPlayerName('')
  }

  function handleRemovePlayerFromActiveTeam(playerId: string) {
    setTeams((state) => {
      const activeTeamIndex = state.findIndex((team) => team.id === activeTeamId)

      state[activeTeamIndex].players = state[activeTeamIndex].players.filter(
        (player) => player.id !== playerId,
      )

      return [...state]
    })
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />
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
              onPress={() => setActiveTeamId(item.id)}
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
