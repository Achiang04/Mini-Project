import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Cards from '../components/Cards';

export default function GenreScreen(props) {
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
    <View style={styles.cotainer}>
      <FlatList
        style={styles.box}
        data={props.route.params.apiMovie.filter((movie) =>
          movie.genre_ids.some((id) => id === props.route.params.genSel),
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({item}) => <RenderNowPlay item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  box: {
    alignSelf: 'center',
    margin: 35,
  },
});
