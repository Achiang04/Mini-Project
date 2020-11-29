import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  alert,
} from 'react-native';

export default function LoginScreen(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState([]);
  const [users, setUsers] = useState([]);
  // const [nameApi, setNameApi] = useState('');
  // const [emailApi, setEmailApi] = useState('');
  // const [roleApi, setRoleApi] = useState('');
  // const [passwordApi, setPasswordApi] = useState('');
  const [name, setName] = useState('ucup');
  const [email, setEmail] = useState('ucup@gmail.com');
  const [password, setPassword] = useState('ucup');
  // const [user, setUser] = useState({
  //   name: 'ucup',
  //   email: 'jecky_hindrawan123@yahoo.com',
  //   password: 'bambang',
  // });

  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      console.log('userToken == ' + token);
      const res = await Axios.get(
        'https://fierce-woodland-97447.herokuapp.com/users/list',
        {
          headers: {
            access_token: token,
          },
        },
      );
      // console.log(res.data.user);
      // setUsers(res.data.user);
      // console.log(users);
      setUsers(
        res.data.user.find((name) => name.email === props.route.params.email),
      );
      // console.log(hasil);
      // console.log(hasil.name);
      // console.log(hasil.id);

      // if (res.data.user.length > 0) {
      //   res.map(res.data.user);
      //   res.map(res.data.user.name);

      //   res.map((data) => ({
      //     name: `${data.name}`,
      //   }));

      //   users.map((data) => ({
      //     name: `${data.name}`,
      //   }));
      // }

      // console.log(res.data.user.name);
      // const data = res.data.user;
      // console.log(data);
      // console.log(data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const changePicture = () => {
    const options = {
      title: 'Select Avatar',
      // customButtons: [
      //   {name: 'fb', title: 'Choose Photo from Facebook'},
      // ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImage(source);
      }
    });
  };

  const handleEditBtn = () => {
    setIsEdit(true);
  };

  const handleSaveButton = () => {
    setIsEdit(false);
  };

  const onChangeUsername = (val) => {
    setName(val);
  };

  const onChangeEmail = (val) => {
    setEmail(val);
  };

  const onChangePassword = (val) => {
    setPassword(val);
  };

  const handleLogout = () => {
    AsyncStorage.removeItem('userToken');
    props.navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bungkus}>
        {image === null ? (
          <Image
            source={require('../assets/gambar/2.png')}
            style={styles.gambar}
          />
        ) : (
          <Image source={image} style={styles.gambar} />
        )}
        <TouchableOpacity onPress={() => changePicture()}>
          <View style={styles.editIcon}>
            <FontAwesome5
              name={'user-edit'}
              size={30}
              color={'white'}
              style={styles.editIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      {isEdit ? (
        <View>
          <TextInput
            placeholderTextColor="white"
            style={styles.text1}
            value={name}
            onChangeText={onChangeUsername}
          />
          <TextInput
            placeholderTextColor="white"
            style={styles.text1}
            value={email}
            onChangeText={onChangeEmail}
          />
          <TextInput
            placeholderTextColor="white"
            style={styles.text1}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
          />
        </View>
      ) : (
        <View>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text1}>{email}</Text>

          {/* <Text style={styles.text1}>{users.name}</Text> */}
        </View>
      )}

      {isEdit ? (
        <View>
          <TouchableOpacity onPress={handleSaveButton}>
            <Text style={styles.btn1}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={handleEditBtn}>
            <Text style={styles.btn1}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      )}

      <View>
        {isEdit ? null : (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.btn1}>Log Out</Text>
          </TouchableOpacity>
        )}
      </View>
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
    height: 150,
    width: 150,
    marginBottom: 15,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  text3: {
    fontSize: 15,
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
  },
  text1: {
    borderBottomWidth: 1,
    padding: 8,
    margin: 10,
    width: 350,
    color: 'white',
    borderColor: 'white',
  },
  btn1: {
    padding: 10,
    borderWidth: 1,
    width: 100,
    borderRadius: 30,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
  },
  bungkus: {
    // backgroundColor: 'blue',
  },
  editIcon: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});
