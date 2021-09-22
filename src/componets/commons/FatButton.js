import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 56,
    width: 56,
    borderRadius: 26,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#560027',
  },

  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});

const FatButton = ({ text = '', textColor = '#000', onPress }) => {
  const textColot = { color: textColor };

  return (
    <TouchableNativeFeedback
      style={[styles.buttonWrapper, textColor]}
      onPress={onPress}
    >
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default FatButton;
