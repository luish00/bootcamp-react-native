import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';

import PrimaryButton from '../componets/commons/PrimaryButton';

const URL_BASE = 'https://api.thecatapi.com/v1';
const GET_IMG = 'images/search';

const HomeScreen = ({ navigation }) => {
  function onLogout() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  useEffect(() => {
    async function get() {
      const request = await fetch(`${URL_BASE}/${GET_IMG}`);
      const response = await request.json();

      if (request.ok) {
        console.log('response', response);
      } else {
        console.log('valio el request');
      }
    }

    get();
  }, []);

  return (
    <>
      <Text>Home</Text>

      <PrimaryButton text="Logout" onPress={onLogout} />
    </>
  );
};

export default HomeScreen;