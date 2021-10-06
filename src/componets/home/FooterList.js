import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PrimaryButton from '../commons/PrimaryButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const FooterList = ({
  page = 0,
  onPrev = () => { },
  onNext = () => { },
}) => {
  return (
    <View style={styles.container}>
      <PrimaryButton onPress={onPrev} text="Anterior" />

      <Text>{`Página actual: ${page}`}</Text>

      <PrimaryButton onPress={onNext} text="Siguiente" />
    </View>
  );
};

export default FooterList;