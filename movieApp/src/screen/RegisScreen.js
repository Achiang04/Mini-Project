import React, {useState} from 'react';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function LoginScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('');

  const handleRegister = async () => {
    try {
      const res = await Axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'https://fierce-woodland-97447.herokuapp.com/users/register',
        data: JSON.stringify({
          name: name,
          email: email,
          password: password,
          role: role,
        }),
      });
      console.log(res.data);
      AsyncStorage.setItem('userToken', res.data);
      navigation.navigate('TabScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/gambar/2.png')}
            style={styles.gambar}
          />
        </View>
        <View>
          <TextInput
            placeholderTextColor="white"
            placeholder="Name"
            style={styles.inputan}
            onChangeText={(item) => setName(item)}
          />
          <TextInput
            placeholderTextColor="white"
            placeholder="Email"
            style={styles.inputan}
            onChangeText={(item) => setEmail(item)}
            keyboardType="email-address"
          />
          <TextInput
            placeholderTextColor="white"
            placeholder="Password"
            onChangeText={(item) => setPassword(item)}
            style={styles.inputan}
            secureTextEntry
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => handleRegister()}>
            <Text style={styles.text1}>SIGN UP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.text3}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  text3: {
    fontSize: 15,
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
    color: 'white',
  },
  inputan: {
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 30,
    width: 350,
    borderColor: 'white',
    color: "white"
  },
  btn1: {
    padding: 10,
    borderWidth: 1,
    width: 100,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: 'white',
  },
  text1: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
