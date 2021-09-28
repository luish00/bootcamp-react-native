import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import TextInputWithLabel from '../componets/commons/TextInputWithLabel';
import PrimaryButton from '../componets/commons/PrimaryButton';

const styles = StyleSheet.create({
  logo: {
    height: 200,
    backgroundColor: '#0d47a1',
  },

  main: {
    backgroundColor: '#fff',
    padding: 18,
    display: 'flex',
    justifyContent: 'center',
  },

  labelTitle: {
    color: '#1a237e',
  },
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onPressLogin() {
    navigation.navigate('Home');
  }

  function onChangeEmail(value) {
    setEmail(value);
  }

  function onChangePassword(value) {
    setPassword(value);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={[styles.main]}>
            <Image style={styles.logo} source={{ uri: 'https://tecnogeek.net/wp-content/uploads/2016/07/Pokemon-GO.jpg.webp' }} />

            <TextInputWithLabel
              error=""
              keyboardType="email-address"
              label="Correo electronico"
              labelClass={styles.labelTitle}
              onChange={onChangeEmail}
              placeholder="ejemplo@gmail.com"
              value={email}
            />

            <TextInputWithLabel
              error=""
              label="Contraseña"
              labelClass={styles.labelTitle}
              onChange={onChangePassword}
              placeholder="******"
              value={password}
              secureTextEntry
            />

            <PrimaryButton onPress={onPressLogin} text="Login" />
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default LoginScreen;
