import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import RatingModal from './RatingModal';

const CardsBox = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const idFromHome = props.id;

  return (
    <View>
      <View style={styles.container3}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <ImageBackground source={props.backdrop} style={styles.imageBox} />
          <Text style={styles.text8}>{props.title}</Text>
          <Text style={styles.text7}>{props.overview}</Text>
          <Text style={styles.text6}>
            ─────────────────────────────────────
          </Text>
          <View style={styles.container4}>
            <TouchableOpacity
              style={styles.icon3}
              onPress={() => {
                props.navigate('AllReviewScreen', {
                  idMovieCards: idFromHome,
                });
                setModalVisible(false);
              }}>
              <FontAwesome5 name={'comment'} size={20} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon4}>
              <FontAwesome5 name={'share-alt'} size={20} color={'white'} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              props.navigate('MovieScreen', {
                idFromCards: idFromHome,
              });
              setModalVisible(false);
            }}>
            <ImageBackground source={props.backdrop} style={styles.image1} />
          </TouchableOpacity>
          <ScrollView>
            <View style={styles.container1}>
              <Text style={styles.modalTitle}>{props.title}</Text>
              <Text style={styles.modalRelease}>{props.release}</Text>
            </View>
            <Text style={{color: 'white'}}>
              ──────────────────────────────────────
            </Text>
            <View style={styles.container2}>
              <ImageBackground
                style={styles.image2}
                source={props.imageBackground}
              />
              <View>
                <View style={styles.container1}>
                  <FontAwesome5
                    style={styles.starIcon1}
                    name={'star'}
                    size={25}
                    color={'white'}
                  />
                  <TouchableOpacity style={styles.starIcon2}>
                    <RatingModal name={'star'} size={25} color={'white'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                  <Text style={styles.vote}>{props.vote}/10</Text>
                  <Text style={styles.modalRate}>Rate This</Text>
                </View>
                <Text style={styles.modalText}>{props.overview}</Text>
              </View>
            </View>
            <View>
              <Text style={{color: 'white'}}>
                ──────────────────────────────────────
              </Text>
              <View style={styles.container1}>
                <TouchableHighlight
                  style={styles.icon1}
                  onPress={() => {
                    props.navigate('AllReviewScreen', {
                      idMovieCards: idFromHome,
                    });
                    setModalVisible(false);
                  }}>
                  <FontAwesome5 name={'comment'} size={25} color={'white'} />
                </TouchableHighlight>
                <TouchableHighlight>
                  <FontAwesome5 name={'share-alt'} size={25} color={'white'} />
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 135,
    height: 525,
    backgroundColor: 'white',
    paddingBottom: 2,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'black',
  },
  openButton: {
    width: 100,
    alignSelf: 'center',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    marginTop: 8,
    width: 200,
    color: 'white',
  },
  modalText: {
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
  },
  modalRate: {
    marginLeft: 10,
    position: 'absolute',
    right: 5,
    top: 5,
    color: 'white',
  },
  vote: {
    top: 5,
    left: 150,
    color: 'white',
  },
  starIcon1: {
    marginLeft: 10,
    marginRight: 20,
    position: 'absolute',
    right: 60,
  },
  starIcon2: {
    marginLeft: 220,
  },
  container1: {
    flexDirection: 'row',
  },
  container2: {
    flexDirection: 'row',
    width: 265,
  },
  image1: {
    width: 380,
    height: 200,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.7)',
    textAlign: 'center',
    width: 150,
    height: 20,
    backgroundColor: 'white',
  },
  image2: {
    width: 110,
    height: 150,
  },
  modalRelease: {
    marginTop: 10,
    fontSize: 15,
    position: 'absolute',
    right: 5,
    color: 'white',
  },
  icon1: {
    marginBottom: 8,
    marginRight: 333,
    zIndex: 10,
  },
  imageBox: {
    height: 200,
    width: 370,
    alignSelf: 'center',
    margin: 10,
  },
  text8: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  text7: {
    marginLeft: 10,
    marginBottom: 5,
    width: 355,
    color: 'white',
  },
  container3: {
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
    borderColor: 'white',
  },
  container4: {
    flexDirection: 'row',
  },
  text6: {
    marginLeft: 10,
    color: 'white',
  },
  icon3: {
    left: 15,
    marginBottom: 10,
    justifyContent: 'flex-end',
    marginRight: 338,
  },
  icon4: {
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
});

export default CardsBox;
