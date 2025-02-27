import { findAllGroups } from './findAllGroups'

export async function findGroupTeams(groupId: string) {
  try {
    const groups = await findAllGroups()
    const groupIndex = groups.findIndex((group) => group.id === groupId)

    if (groupIndex === -1) {
      return false
    }

    return groups[groupIndex].teams
  } catch (error) {
    throw error
  }
}
