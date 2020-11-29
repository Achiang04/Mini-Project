import React, {useState} from 'react';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // const setStringValue = async (value) => {
  //   try {
  //     await AsyncStorage.setItem('user', user);
  //     await AsyncStorage.setItem('password', password);
  //     await AsyncStorage.setItem('userToken', value);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   console.log('set Done.');
  // };

  // const getMyStringValue = async () => {
  //   try {
  //     const user = await AsyncStorage.getItem('user');
  //     const password = await AsyncStorage.getItem('password');
  //     const token = await AsyncStorage.getItem('userToken');

  //     if (user !== null) {
  //       setUser({user});
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   console.log('get Done.');
  // };

  const handleLogin = async () => {
    try {
      const res = await Axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'https://fierce-woodland-97447.herokuapp.com/users/login',
        data: JSON.stringify({
          email: user,
          password: password,
        }),
      });
      // console.log(res.data.token);
      await AsyncStorage.setItem('userToken', res.data.token);
      navigation.navigate('TabScreen', {
        email: user,
      });
      // setStringValue(res.data.token);
      // getMyStringValue();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const res = await Axios.post(
  //       'https://fierce-woodland-97447.herokuapp.com/users/login',
  //       {
  //         email: user,
  //         password: password,
  //       },
  //     );
  //     console.log(res.data.token);
  //     AsyncStorage.setItem('userToken', res.data.token);
  //     onChange('userToken', res.data.token);
  //     // console.log('res login', res);
  //     navigation.navigate('TabScreen');
  //   } catch (error) {
  //     console.log(error);
  //     // alert('Login failed. Please check again yo');
  //   }
  // };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/gambar/4.png')}
            style={styles.gambar}
          />
          <Text style={styles.text1}>Movie Review</Text>
        </View>
        <View>
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            // value={user}
            style={styles.inputan}
            keyboardType="email-address"
            onChangeText={(item) => setUser(item)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={styles.inputan}
            secureTextEntry
            onChangeText={(item) => setPassword(item)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.btn1} onPress={() => handleLogin()}>
            <Text style={styles.textBtn1}>SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn3}
            onPress={() => navigation.navigate('RegisScreen')}>
            <Text style={styles.text3}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.text4}>───────────── or ─────────────</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <FontAwesome5 name={'facebook'} size={35} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name={'google'} size={35} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name={'linkedin'} size={35} color={'white'} />
            </TouchableOpacity>
          </View>
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
    height: 150,
    width: 150,
    marginBottom: 15,
  },
  text1: {
    fontSize: 30,
    fontFamily: 'Schoolbell',
    color: 'white',
  },
  textBtn1: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputan: {
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 30,
    width: 350,
    color: 'white',
    borderColor: 'white',
  },
  text2: {
    fontSize: 15,
    padding: 10,
  },
  text3: {
    fontSize: 15,
    padding: 10,
    color: 'white',
  },
  btn1: {
    padding: 10,
    borderWidth: 1,
    width: 100,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  btn2: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  btn3: {
    alignSelf: 'center',
    marginTop: 10,
  },
  text4: {
    fontSize: 17,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
