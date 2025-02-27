import { PlayerStorageDTO } from './PlayerStorageDTO'

export interface TeamStorageDTO {
  id: string
  title: string
  players: PlayerStorageDTO[]
}
