import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('LoginScreen'));
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/gambar/4.png')} style={styles.gambar} />
      <Text style={styles.text1}>Movie Review</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  gambar: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginBottom: 15,
  },
  text1: {
    fontSize: 30,
    fontFamily: 'Schoolbell',
    color: 'white',
  },
});
