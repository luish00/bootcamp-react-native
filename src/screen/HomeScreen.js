import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EmptyList from '../componets/home/EmptyList';
import FooterList from '../componets/home/FooterList';
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

const LIMIT = 5;
const PAGE = 1;

const HomeScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  function onLogout() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  // @deprecate
  async function getOne() {
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

  async function getAll() {
    setLoading(true);
    const query = `?limit=${limit}&page=${page}&order=Desc`;
    const request = await fetch(`${URL_BASE}/${GET_IMG}${query}`);
    const response = await request.json();

    if (request.ok) {
      setData(response);
    } else {
      console.log('request no ok');
    }

    setLoading(false);
  }

  useEffect(() => {
    getAll();
  }, []);

  function renderLoading() {
    if (isLoading) {
      return <ActivityIndicator size="small" color="#0000ff" />
    }

    return null;
  }

  function renderList() {
    if (data.length === 0) {
      return null;
    }

    return data.map(item => (
      <Image style={styles.img} source={{ uri: item.url }} />
    ));
  }

  function renderItem({ item }) {
    return <Image style={styles.img} source={{ uri: item.url }} />;
  }

  function keyExtractor(item) {
    return item.id;
  }

  console.warn('loading', isLoading)

  return (
    <View>
      {/* funcion */}
      {/* {renderLoading()} */}
      {/* inline */}
      {isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : null}
      {/* new component (local) */}
      {/* <Loading isLoading={isLoading} /> */}

      <FlatList
        data={data}
        ListEmptyComponent={EmptyList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListFooterComponent={FooterList}
      />

      <PrimaryButton text="Logout" onPress={onLogout} />
    </View>
  );
};

export default HomeScreen;
