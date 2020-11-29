import React, {useState, useEffect} from 'react';
import Variable from '../api/var';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ReviewScreen(props) {
  const [review, setReview] = useState('');
  const id = props.route.params.idMovieCards;
  // console.log('id di review' + id);

  // const getNow = async () => {
  //   try {
  //     let response = await fetch(
  //       Variable.host + 'movie/now_playing?api_key=' + Variable.api_key_tmdb,
  //     );
  //     let json = await response.json();
  //     setReview(json.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getReview = async () => {
    try {
      let response = await fetch(
        `${Variable.host}movie/${id}/reviews?api_key=${Variable.api_key_tmdb}&language=en-US&page=1`,
      );
      let json = await response.json();
      setReview(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  const RenderBox = ({item}) => {
    return (
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
          }}
          style={styles.boxPlay}
        />

        <View>
          <View>
            <View style={styles.container2}>
              <FontAwesome5
                style={styles.starIcon}
                name={'star'}
                size={23}
                color={'white'}
              />
              <Text style={styles.vote}>{item.vote_average}/10</Text>
            </View>
            {/* <Text style={styles.text4}>Reviewer {item.title}</Text> */}
            <Text style={styles.text4}>Reviewer {item.author}</Text>
          </View>
          <Text style={styles.review2}>{item.content}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>All Review's</Text>
      </View>
      <View>
        <FlatList
          contentContainerStyle={{marginLeft: 10}}
          data={review}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RenderBox item={item} />}
        />
      </View>
      {/* <View style={styles.addBtn}>
        <TouchableOpacity>
          <FontAwesome5 name={'plus-circle'} size={23} color={'black'} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    backgroundColor: 'black',
  },
  container1: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
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
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  text4: {
    marginLeft: 10,
    color: 'white',
  },
  starIcon: {
    marginLeft: 10,
    marginTop: 10,
  },
  vote: {
    marginTop: 10,
    marginLeft: 7,
    color: 'white',
  },
  icon1: {
    marginLeft: 5,
  },
  review2: {
    width: 365,
    marginLeft: -50,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  container2: {
    flexDirection: 'row',
  },
  addBtn: {
    position: 'absolute',
  },
});
