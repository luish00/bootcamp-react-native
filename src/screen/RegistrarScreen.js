import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import TextInputWithLabel from '../componets/commons/TextInputWithLabel';
import PrimaryButton from '../componets/commons/PrimaryButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingHorizontal: 16,
  },
});

const RegistrarScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangeInput = callback => value => {
    if (callback) {
      callback(value);
    }
  };

  useEffect(() => {
    setNameError('');
  }, [name]);

  const onRegistrar = () => {
    if (name.length === 0) {
      setNameError('Campo Requerido');
    } else {
      setNameError('');
    }
  };

  function onFocusName() {
    setNameError('');
  }

  function handleOnChangeName(value) {
    setName(value);
    setNameError('');
  }

  return (
    <ScrollView behavior="height">
      <View style={styles.container}>
        <TextInputWithLabel
          label="Nombre"
          placeholder="Hector"
          value={name}
          onChange={handleOnChangeName}
          error={nameError}
        />

        <TextInputWithLabel
          label="correo"
          placeholder="hector@gmail.com"
          keyboardType="email-address"
          value={email}
          onChange={onChangeInput(setEmail)}
        />

        <TextInputWithLabel
          label="Contraseña"
          placeholder="*****"
          secureTextEntry={true}
          value={password}
          onChange={onChangeInput(setPassword)}
        />

        <TextInputWithLabel
          label="Repetir contraseña"
          placeholder="*****"
          secureTextEntry
          value={confirmPassword}
          onChange={onChangeInput(setConfirmPassword)}
        />

        <PrimaryButton onPress={onRegistrar} text="Registrar" />
      </View>
    </ScrollView>
  );
};

export default RegistrarScreen;
