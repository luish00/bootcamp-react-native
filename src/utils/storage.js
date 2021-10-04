import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({ key = '', value }) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // saving error
    console.log('Error storeData', error.message);
  }
};

export const storeObjectData = async ({
  key = '',
  value = {},
}) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    // saving error
    console.log('Error storeData', error.message);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (error) {
    // error reading value
    console.log('Error storeData', error.message);
    return null;
  }
};

export const getObjectData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    // error reading value
    console.log('Error storeData', error.message);
    return null;
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    // clear error
  }
};
