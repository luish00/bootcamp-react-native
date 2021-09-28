import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: '#1e88e5',
    display: 'flex',
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

const PrimaryButton = ({ text = '', textColor = '#000', onPress }) => {
  const textColot = { color: textColor };

  return (
    <TouchableNativeFeedback
      style={[styles.buttonWrapper, { textColor }]}
      onPress={onPress}
    >
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default PrimaryButton;
