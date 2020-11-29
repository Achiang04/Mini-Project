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
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RatingModal from './RatingModal';

const CardsMovie = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <View>
          <ImageBackground
            style={styles.boxPlay}
            source={props.imageBackground}
          />
          <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.modalView}>
          <ImageBackground
            source={props.imageBackground}
            style={styles.image1}
          />
          <ScrollView>
            <View style={styles.container1}>
              <Text style={styles.modalTitle}>{props.title}</Text>
              <Text style={styles.modalRelease}>{props.release}</Text>
            </View>
            <Text>──────────────────────────────────────</Text>
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
                    color={'black'}
                  />
                  <TouchableOpacity style={styles.starIcon2}>
                    <RatingModal name={'star'} size={25} color={'black'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                  <Text style={styles.vote}>-/-</Text>
                  <Text style={styles.modalRate}>Rate This</Text>
                </View>
                <Text style={styles.modalText}>{props.overview}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.text6}>
                ──────────────────────────────────────
              </Text>
              <View style={styles.container1}>
                <TouchableHighlight
                  style={styles.icon1}
                  onPress={() => {
                    props.navigate('AllReviewScreen');
                    setModalVisible(false);
                  }}>
                  <FontAwesome5 name={'comment'} size={25} />
                </TouchableHighlight>
                <TouchableHighlight>
                  <FontAwesome5 name={'share-alt'} size={25} />
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
  },
  openButton: {
    width: 100,
    alignSelf: 'center',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    marginTop: 8,
    width: 200,
  },
  modalText: {
    marginLeft: 10,
    marginTop: 5,
  },
  modalRate: {
    marginLeft: 10,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  vote: {
    top: 5,
    left: 163,
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
  boxPlay: {
    resizeMode: 'cover',
    marginTop: 5,
    marginRight: 10,
    width: 150,
    height: 200,
    flex: 1,
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
  },
  icon1: {
    marginBottom: 8,
    marginRight: 330,
  },
});

export default CardsMovie;
