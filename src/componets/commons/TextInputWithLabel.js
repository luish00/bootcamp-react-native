import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },

  input: {
    borderColor: '#555',
    borderWidth: 1,
  },

  label: {
    fontSize: 15,
    paddingBottom: 5,
    color: '#555',
  },
});

const TextInputWithLabel = ({
  label = '',
  onChange,
  labelClass = {},
  value = '',
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelClass]}>{label}</Text>

      <TextInput style={styles.input} onChangeText={onChange} value={value} />
    </View>
  );
};

export default TextInputWithLabel;
