export type Player = {
  id: string
  name: string
}

export type Team = {
  id: string
  title: string
  players: Player[]
}

export type Group = {
  id: string
  title: string
  teams: Team[]
}
