import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import uuid from 'react-native-uuid'
import { findAllGroups } from './findAllGroups'

export async function createGroup(groupTitle: string) {
  try {
    const groups = await findAllGroups()
    const groupAlreadyExists = groups.findIndex((group) => group.title === groupTitle) !== -1

    if (groupAlreadyExists) {
      throw new AppError('Grupo já existe.')
    }

    const group = {
      id: uuid.v4(),
      title: groupTitle,
      teams: [
        { id: 'team-a', title: 'Time A', players: [] },
        { id: 'team-b', title: 'Time B', players: [] },
      ],
    }

    groups.push(group)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))

    return group
  } catch (error) {
    throw error
  }
}
