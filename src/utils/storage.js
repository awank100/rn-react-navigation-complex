import { AsyncStorage } from 'react-native'

export const TOKEN = 'token'

export const readToken = async () => {
  return await AsyncStorage.getItem(TOKEN)
}

export const saveToken = async token => {
  await AsyncStorage.setItem(TOKEN, token)
}

export const clearToken = async () => {
  await AsyncStorage.removeItem(TOKEN)
}
