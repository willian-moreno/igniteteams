import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { findAllGroups } from './findAllGroups'

export async function deleteGroup(groupId: string) {
  try {
    const groups = await findAllGroups()
    const filteredGroups = groups.filter((group) => group.id !== groupId)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups))

    return true
  } catch (error) {
    throw error
  }
}
