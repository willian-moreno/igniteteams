import { Button } from '@components/button'
import { ButtonIcon } from '@components/button-icon'
import { Filter } from '@components/filter'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { ListEmpty } from '@components/list-empty'
import { Loading } from '@components/loading'
import { PlayerCard } from '@components/player-card'
import { useTeams } from '@hooks/useTeams'
import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { deleteGroup } from '@storage/group/deleteGroup'
import { findGroupTeams } from '@storage/teams/findGroupTeams'
import { updateGroupTeams } from '@storage/teams/updateGroupTeams'
import { AppError } from '@utils/AppError'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'
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
  const navigation = useNavigation()

  const {
    params: { group },
  } = useRoute<RouteProp<{ params: RouteParams }>>()

  const { colors } = useTheme()

  const {
    teams,
    activeTeamId,
    activeTeamPlayers,
    numberOfActiveTeamPlayers,
    updateTeams,
    updateActiveTeamId,
    addPlayerInActiveTeam,
    removePlayerFromActiveTeam,
  } = useTeams()

  const [playerName, setPlayerName] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  const isAddPlayerButtonDisabled = playerName.trim().length === 0

  const playerNameInputRef = useRef<TextInput>(null)

  async function loadStorageGroupTeams() {
    try {
      setIsLoading(true)
      const teams = await findGroupTeams(group.id)

      if (!teams) {
        return
      }

      updateTeams(teams)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function updateStorageGroupTeams() {
    try {
      setIsLoading(true)
      await updateGroupTeams(group.id, teams)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleSetActiveTeamId(teamId: string) {
    updateActiveTeamId(teamId)
  }

  async function handleAddPlayerInActiveTeam() {
    try {
      addPlayerInActiveTeam({
        id: uuid.v4(),
        name: playerName.trim(),
      })

      setPlayerName('')

      playerNameInputRef?.current?.blur()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo participante', error.message)

        return
      }

      Alert.alert('Novo participante', 'Não foi possível cadastrar um novo participante.')
      console.error(error)
    }
  }

  function handleRemovePlayerFromActiveTeam(playerId: string) {
    Alert.alert('Remover', 'Deseja remover o participante?', [
      {
        text: 'Sim',
        onPress: () => {
          removePlayerFromActiveTeam(playerId)
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function handleRemoveGroup() {
    Alert.alert('Remover', 'Deseja remover o grupo?', [
      {
        text: 'Sim',
        onPress: async () => {
          await deleteGroup(group.id)
          navigation.navigate('groups')
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  useFocusEffect(
    useCallback(() => {
      loadStorageGroupTeams()
    }, []),
  )

  useEffect(() => {
    updateStorageGroupTeams()
  }, [group, teams])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group.title} subtitle="adicione a galera e separe os times" />
      <InputContainer>
        <Input
          inputRef={playerNameInputRef}
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
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
      <Button
        title="Remover turma"
        variant="secondary"
        style={{ marginTop: 20 }}
        onPress={handleRemoveGroup}
      />
    </Container>
  )
}
