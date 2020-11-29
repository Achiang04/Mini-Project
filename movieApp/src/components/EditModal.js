import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Modal,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

const EditModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [star, setStar] = useState([
    {name: 'star', id: '1'},
    {name: 'star', id: '2'},
    {name: 'star', id: '3'},
    {name: 'star', id: '4'},
    {name: 'star', id: '5'},
    {name: 'star', id: '6'},
    {name: 'star', id: '7'},
    {name: 'star', id: '8'},
    {name: 'star', id: '9'},
    {name: 'star', id: '10'},
  ]);

  const RenderStar = ({item}) => {
    return (
      <View style={styles.box}>
        <TouchableOpacity>
          <FontAwesome5 name={item.name} size={25} color={'black'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <FontAwesome5 name={props.name} size={props.size} color={props.color} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            How do you think about this movie ?
          </Text>
          <FlatList
            horizontal
            data={star}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <RenderStar item={item} />}
          />
          <Text style={styles.rateText}>Your Rating : 0</Text>
          <TextInput
            placeholder="Write a headline for your review here"
            style={styles.inputan1}
            multiline
            textAlignVertical={'top'}
          />
          <TextInput
            placeholder="Write your review here"
            style={styles.inputan2}
            multiline
            textAlignVertical={'top'}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Submit</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 150,
    backgroundColor: 'pink',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 35,
    width: 100,
  },
  rateText: {
    marginTop: 5,
  },
  inputan1: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
    width: 350,
    height: 70,
    backgroundColor: 'white',
  },
  inputan2: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
    width: 350,
    height: 200,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});

export default EditModal;
