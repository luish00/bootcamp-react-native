import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },

  error: {
    color: '#e53935',
    fontSize: 13,
  },

  input: {
    borderColor: '#555',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
  },

  inputError: {
    borderColor: '#e53935',
  },

  label: {
    fontSize: 15,
    paddingBottom: 5,
    color: '#555',
  },
});

const TextInputWithLabel = ({
  error = null,
  keyboardType = 'default',
  label = '',
  labelClass = {},
  onBlur,
  onChange = () => { },
  onFocus = () => { },
  placeholder = '',
  secureTextEntry = false,
  value = '',
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelClass]}>{label}</Text>

      <TextInput
        style={[styles.input, error && styles.inputError]}
        onChangeText={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default TextInputWithLabel;
