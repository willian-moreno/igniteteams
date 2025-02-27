import { TeamStorageDTO } from './TeamStorageDTO'

export interface GroupStorageDTO {
  id: string
  title: string
  teams: TeamStorageDTO[]
}
