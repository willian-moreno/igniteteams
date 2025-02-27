import { Player, Team } from '@@types/group'
import { useMemo, useState } from 'react'

type Props = {
  defaultTeams: Team[]
}

export function useTeams({ defaultTeams = [] }: Props) {
  const [teams, setTeams] = useState<Team[]>(defaultTeams)

  const [activeTeamId, setActiveTeamId] = useState('team-a')

  const activeTeamPlayers = useMemo(() => {
    return teams.find((team) => team.id === activeTeamId)?.players
  }, [teams, activeTeamId])

  const numberOfActiveTeamPlayers = useMemo(() => activeTeamPlayers?.length, [teams, activeTeamId])

  function updateActiveTeamId(teamId: string) {
    setActiveTeamId(teamId)
  }

  function addPlayerInActiveTeam(player: Player) {
    setTeams((state) => {
      const activeTeamIndex = state.findIndex((team) => team.id === activeTeamId)

      const playerAlreadyExists =
        state[activeTeamIndex].players.findIndex(({ name }) => name === player.name) !== -1

      if (playerAlreadyExists) {
        return state
      }

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

    updateActiveTeamId,
    addPlayerInActiveTeam,
    removePlayerFromActiveTeam,
  }
}
