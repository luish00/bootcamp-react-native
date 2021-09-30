import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
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

  btnRegistrar: {
    height: 40,
    marginTop: 16,
    textAlign: 'center',
  },
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Los efectos se ejecutan cada vez que algun valor de su array de dependencias cambia
  // @link https://es.reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
    if (email.length === 0) {
      setEmailError('');
    }

  }, [email]);

  function onPressLogin() {
    navigation.navigate('Home');
  }

  function onPressRegistar() {
    navigation.navigate('Registrar');
  }

  function onChangeEmail(value) {
    setEmail(value);
  }

  function onChangePassword(value) {
    setPassword(value);
  }

  function onBlurEmail() {
    // Validación del correo cuando el input pierde el "foco"
    if (!email.includes('@')) {
      setEmailError('@ requerido');
    } else {
      setEmailError('');
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={[styles.main]}>
            <Image style={styles.logo} source={{ uri: 'https://tecnogeek.net/wp-content/uploads/2016/07/Pokemon-GO.jpg.webp' }} />

            <TextInputWithLabel
              error={emailError}
              keyboardType="email-address"
              label="Correo electronico"
              labelClass={styles.labelTitle}
              onChange={onChangeEmail}
              onBlur={onBlurEmail}
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

            <TouchableNativeFeedback onPress={onPressRegistar}>
              <Text style={styles.btnRegistrar}>Registrate</Text>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default LoginScreen;
