import React, {useState, useEffect} from 'react';
import Variable from '../api/var';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EditModal from '../components/RatingModal';

export default function ReviewScreen() {
  const [nowPlay, setNowplay] = useState([]);

  const getNow = async () => {
    try {
      let response = await fetch(
        Variable.host + 'movie/now_playing?api_key=' + Variable.api_key_tmdb,
      );
      let json = await response.json();
      setNowplay(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNow();
  }, []);

  const RenderBox = ({item}) => {
    return (
      <View style={styles.box}>
        <ImageBackground
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
          }}
          style={styles.boxPlay}
        />
        <View>
          <Text style={styles.text3}>{item.title}</Text>
          <Text style={styles.text4}>Review Date ({item.release_date})</Text>
          <FontAwesome5
            style={styles.starIcon}
            name={'star'}
            size={18}
            color={'white'}
          />
          <Text style={styles.vote}>{item.vote_average}/10</Text>
          <View style={styles.container2}>
            <TouchableOpacity style={styles.icon1}>
              <EditModal name={'user-edit'} size={20} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon2}>
              <FontAwesome5 name={'trash'} size={20} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container3}>
          <Text style={styles.review1}>{item.title}</Text>
          <Text style={styles.review2}>{item.overview}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>Your Review's</Text>
      </View>
      <View>
        <FlatList
          data={nowPlay}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RenderBox item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingBottom: 100,
  },
  container1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
  },
  container2: {
    flexDirection: 'row',
  },
  text1: {
    top: 11,
    left: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    width: 390,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    margin: 5,
    flexDirection: 'row',
    borderColor: 'white',
  },
  boxPlay: {
    marginTop: 10,
    marginLeft: 10,
    width: 100,
    height: 130,
  },
  text3: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 17,
    fontWeight: 'bold',
    width: 250,
    color: 'white',
  },
  text4: {
    marginLeft: 5,
    color: 'white',
  },
  starIcon: {
    marginLeft: 5,
    marginTop: 5,
  },
  vote: {
    left: 30,
    top: -19,
    color: 'white',
  },
  icon1: {
    marginLeft: 5,
  },
  icon2: {
    marginLeft: 10,
  },
  review1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  review2: {
    width: 365,
    color: 'white',
  },
  container3: {
    flexDirection: 'column',
    position: 'relative',
    marginTop: 145,
    left: -355,
    marginBottom: 10,
  },
});
