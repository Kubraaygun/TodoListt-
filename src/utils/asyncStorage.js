import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('SETITEM: ', error);
  }
};

export const getItem = async key => {
  try {
    await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('GETITEM: ', error);
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('removeItem: ', error);
  }
};
