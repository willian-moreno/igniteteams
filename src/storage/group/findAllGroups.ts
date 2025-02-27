import { Group } from '@@types/group'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'

export async function findAllGroups() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
    const groups: Group[] = storage ? JSON.parse(storage) : []

    return groups
  } catch (error) {
    throw error
  }
}
