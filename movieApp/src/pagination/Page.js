import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Posting from './Posting';
import Pagination from './Pagination';
import axios from 'axios';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
      );
      let json = await response.json();
      setPosts(json.data);
      setLoading(false);
    };

    const fetchMovie = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=da06bc5bd57ed7dfd2653656d7890fbc&language=en-US&page=${currentPage}
        `,
      );
      let json = await response.json();
      setMovie(json.data);
      setLoading(false);
    };

    // const fetchPosts = async () => {
    //   try {
    //     let response = await fetch(
    //       'https://jsonplaceholder.typicode.com/posts',
    //     );
    //     let json = await response.json();
    //     setPosts(json.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    fetchPosts();
    fetchMovie();
  }, []);

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
      />
    );
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <View>
      <Text>Test</Text>
      <Posting posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Text>Movie</Text>
      <FlatList
        data={movie}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <RenderHot item={item} />}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movie.length}
        paginate={paginate}
      />
    </View>
  );
};

export default Page;
