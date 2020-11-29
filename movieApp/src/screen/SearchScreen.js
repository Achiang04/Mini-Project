import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Cards from '../components/Cards';
import Variable from '../api/var';

export default function SearchScreen(props) {
  // const [movies, setMovies] = useState([]);

  // const getNow = async () => {
  //   try {
  //     let response = await fetch(
  //       Variable.host + 'movie/now_playing?api_key=' + Variable.api_key_tmdb,
  //     );
  //     let json = await response.json();
  //     setMovies(json.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getNow();
  // }, []);

  const RenderNowPlay = ({item}) => {
    return (
      <Cards
        imageBackground={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        }}
        image={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
        }}
        title={item.title}
        release={item.release_date}
        overview={item.overview}
        vote={item.vote_average}
        id={item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        your searching for {props.route.params.value}
      </Text>
      {/* <FlatList
        style={styles.box}
        data={movies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({item}) => <RenderNowPlay item={item} />}
      /> */}
      <FlatList
        style={styles.box}
        data={props.route.params.apiMovie}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({item}) => <RenderNowPlay item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  box: {
    alignSelf: 'center',
    margin: 20,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
});
