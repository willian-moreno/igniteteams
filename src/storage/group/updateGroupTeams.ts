import { Team } from '@@types/group'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { findAllGroups } from './findAllGroups'

export async function updateGroupTeams(groupId: string, updatedTeams: Team[]) {
  try {
    const groups = await findAllGroups()
    const groupIndex = groups.findIndex((group) => group.id === groupId)

    if (groupIndex === -1) {
      return false
    }

    groups[groupIndex].teams = updatedTeams

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))

    return true
  } catch (error) {
    throw error
  }
}
