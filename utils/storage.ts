import AsyncStorage from '@react-native-async-storage/async-storage';

export const enum StorageKeys {
  TODO_LIST = 'TODO_LIST',
}

type StorageDataKey = keyof typeof StorageKeys

export const setStorageData = async (key: StorageDataKey, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getStorageData = async (key: StorageDataKey) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
  } catch (e) {
    console.error(e);
  }
};

export const removeStorageData = async (key: StorageDataKey) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
}