import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PrimaryButton from '../componets/commons/PrimaryButton';

const URL_BASE = 'https://api.thecatapi.com/v1';
const GET_IMG = 'images/search';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  img: {
    display: 'flex',
    minHeight: 250,
    width: '100%',
  },
});

const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : null}
    </>
  );
};

const HomeScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({ url: '', id: '' });
  let otroData = {};

  function onLogout() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  async function get() {
    setLoading(true);
    const request = await fetch(`${URL_BASE}/${GET_IMG}`);
    const response = await request.json();

    if (request.ok) {
      // destructuring
      const [item] = response;
      const responseItem = response[0];

      setData(item);
      console.log('response', item);
    } else {
      console.log('request no ok');
    }

    setLoading(false);
  }

  useEffect(() => {
    get();
  }, []);

  console.log('data', data)

  function renderLoading() {
    if (isLoading) {
      return <ActivityIndicator size="small" color="#0000ff" />
    }

    return null;
  }

  return (
    <View style={{ height }}>
      {/* funcion */}
      {/* {renderLoading()} */}
      {/* inline */}
      {/* {isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : null} */}
      {/* new component (local) */}
      <Loading isLoading={isLoading} />

      {data.url ? <Image style={styles.img} source={{ uri: data.url }} /> : null}

      <PrimaryButton text="Logout" onPress={onLogout} />
    </View>
  );
};

export default HomeScreen;
