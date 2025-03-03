import { Player, Team } from '@@types/group'
import { AppError } from '@utils/AppError'
import { useMemo, useState } from 'react'

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([])

  const [activeTeamId, setActiveTeamId] = useState('team-a')

  const activeTeamPlayers = useMemo(() => {
    return teams.find((team) => team.id === activeTeamId)?.players
  }, [teams, activeTeamId])

  const numberOfActiveTeamPlayers = useMemo(() => activeTeamPlayers?.length, [teams, activeTeamId])

  function updateTeams(teams: Team[]) {
    setTeams(teams)
  }

  function updateActiveTeamId(teamId: string) {
    setActiveTeamId(teamId)
  }

  function addPlayerInActiveTeam(player: Player) {
    const activeTeamIndex = teams.findIndex((team) => team.id === activeTeamId)

    const playerAlreadyExists =
      teams[activeTeamIndex].players.findIndex(({ name }) => name === player.name) !== -1

    if (playerAlreadyExists) {
      throw new AppError('Participante já existe.')
    }

    setTeams((state) => {
      state[activeTeamIndex].players.push(player)

      return [...state]
    })
  }

  function removePlayerFromActiveTeam(playerId: string) {
    setTeams((state) => {
      const activeTeamIndex = state.findIndex((team) => team.id === activeTeamId)

      state[activeTeamIndex].players = state[activeTeamIndex].players.filter(
        (player) => player.id !== playerId,
      )

      return [...state]
    })
  }

  return {
    teams,
    activeTeamId,
    activeTeamPlayers,
    numberOfActiveTeamPlayers,

    updateTeams,
    updateActiveTeamId,
    addPlayerInActiveTeam,
    removePlayerFromActiveTeam,
  }
}
