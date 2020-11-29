import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function Inputan({ph, type, secure}) {
  return (
    <TextInput
      placeholder={ph}
      style={styles.design}
      keyboardType={type}
      secureTextEntry={secure}
    />
  );
}

const styles = StyleSheet.create({
  design: {
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 30,
    width: 350,
  },
});
