import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import Variable from '../api/var';
import Cards from '../components/Cards';
import CardsMovie from '../components/CardsMovie';
import CardsBox from '../components/CardsBox';
// import Paginator from 'react-hooks-paginator';
// import Page from '../pagination/Page.js';

console.disableYellowBox = true;

export default function HomeScreenApi({navigation}) {
  const [movieApi, setMovieApi] = useState([]);
  const [genres, setGenres] = useState([]);
  const [nowPlay, setNowplay] = useState([]);
  const [coming, setComing] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const getSearch = async (item) => {
    console.log('test');
    try {
      let response = await fetch(
        `${Variable.host}search/movie?api_key=${Variable.api_key_tmdb}&query=${search}`,
      );
      let json = await response.json();
      setMovieApi(json.results);
      navigation.navigate('SearchScreen', {
        id: item.id,
        apiMovie: json.results,
        value: search,
      });
      console.log(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  // const getPage = async () => {
  //   console.log('test');
  //   try {
  //     let response = await fetch();
  //     // `https://api.themoviedb.org/3/movie/upcoming?api_key=da06bc5bd57ed7dfd2653656d7890fbcda06bc5bd57ed7dfd2653656d7890fbc&language=en-US&page=${currentPage}`,
  //     let json = await response.json();
  //     setCurrentPage(json.results);
  //     console.log(json.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getMovieApi = async () => {
    console.log('test');
    try {
      let response = await fetch(
        `https://fierce-woodland-97447.herokuapp.com/movie/1`,
      );
      let json = await response.json();
      setMovieApi(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getGenres = async () => {
    try {
      let response = await fetch(
        'https://fierce-woodland-97447.herokuapp.com/movie/genre/',
      );
      let json = await response.json();
      setGenres(json.results);
    } catch (error) {
      console.error(error);
    }
  };

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

  const getComing = async () => {
    try {
      let response = await fetch(
        Variable.host + 'movie/upcoming?api_key=' + Variable.api_key_tmdb,
      );
      let json = await response.json();
      setComing(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieApi();
    getGenres();
    getNow();
    getComing();
  }, []);

  // const genreTranslator = (genre_ids) => {
  //   let genreNames = [];
  //   for (let i = 0; i < genre_ids.length; i++) {
  //     for (let j = 0; j < genres.length; j++) {
  //       if (genre_ids[i] === genres[j].id) {
  //         genreNames.push(genres[j].name);
  //       }
  //     }
  //   }
  //   return genreNames;
  // };

  const RenderGenre = ({item}) => {
    return (
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('GenreScreen', {
              id: item.id,
              apiMovie: movieApi,
              genSel: item.id,
            });
          }}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

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
        navigate={navigation.navigate}
      />
    );
  };

  const RenderNowPlayMovie = ({item}) => {
    return (
      <CardsMovie
        imageBackground={{uri: item.picture}}
        title={item.title}
        release={item.year}
        overview={item.synopsis}
        navigate={navigation.navigate}
      />
    );
  };

  // const next = () => {
  //   setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  // };

  // const prev = () => {
  //   setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  // };

  const RenderHot = ({item}) => {
    return (
      <CardsBox
        backdrop={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
        }}
        imageBackground={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        }}
        title={item.title}
        release={item.release_date}
        overview={item.overview}
        vote={item.vote_average}
        navigate={navigation.navigate}
      />
    );
  };

  // const searchText = () => {
  //   return condition ? (
  //     <TouchableOpacity onPress={(setCondition(false), getSearch(search))}>
  //       <Text style={{backgroundColor: 'black', color: 'white'}}>true</Text>
  //     </TouchableOpacity>
  //   ) : (
  //     <Text style={{backgroundColor: 'black', color: 'white'}}>false</Text>
  //   );
  // };

  return (
    <View style={styles.color}>
      <View style={styles.container}>
        <FontAwesome5 style={styles.icon1} name={'search'} size={20} />
        <TextInput
          style={styles.search}
          value={search}
          onChangeText={(e) => setSearch(e)}
          onSubmitEditing={async (item) => {
            await getSearch(item);
          }}
        />
        <TouchableOpacity>
          <FontAwesome5 style={styles.icon2} name={'times'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text5}>Best Genre</Text>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={genres}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RenderGenre item={item} />}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.text1}>Movie</Text>
        <FlatList
          contentContainerStyle={{marginLeft: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movieApi}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RenderNowPlayMovie item={item} />}
        />
        <Text style={styles.text1}>Now Playing</Text>
        <FlatList
          contentContainerStyle={{marginLeft: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={nowPlay}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RenderNowPlay item={item} />}
        />
        <Text style={styles.text1}>Up Coming</Text>
        <FlatList
          data={coming.slice(0, 5)}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RenderHot item={item} />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: 'white',
    marginBottom: 135,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: 'black',
    margin: 10,
    paddingLeft: 45,
    paddingRight: 40,
  },
  icon1: {
    position: 'absolute',
    left: 25,
    top: 24,
    zIndex: 10,
  },
  icon2: {
    position: 'absolute',
    right: 25,
    top: 24,
    zIndex: 10,
  },
  icon3: {
    left: 20,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  icon4: {
    marginBottom: 10,
    justifyContent: 'flex-end',
    left: 335,
  },
  box: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    padding: 7,
  },
  text5: {
    marginTop: -5,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  text4: {
    backgroundColor: '#F09631',
    alignSelf: 'flex-start',
    padding: 5,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  container3: {
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    margin: 5,
  },
  imageBox: {
    height: 180,
    width: 370,
    alignSelf: 'center',
    margin: 10,
  },
  text6: {
    marginLeft: 10,
  },
  text8: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  text7: {
    marginLeft: 10,
    marginBottom: 5,
    width: 355,
  },
  container4: {
    flexDirection: 'row',
  },
  searchBar: {
    width: 500,
  },
});
