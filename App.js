/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import FatButton from './src/componets/commons/FatButton';
import TextInputWithLabel
  from './src/componets/commons/TextInputWithLabel';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    padding: 18,
  },

  labelTitle: {
    color: 'red',
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [title, setTitle] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onClick() {
    
  }

  function onChange(value) {
    setTitle(value);
  }

  console.log('titulo', title)

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.main}>
          <TextInputWithLabel
            label="Title"
            labelClass={styles.labelTitle}
            onChange={onChange}
            value={title}
          />

          <FatButton onPress={onClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
