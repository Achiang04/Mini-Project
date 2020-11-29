import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import YouTube from 'react-native-youtube';
import Axios from 'axios';
import Variable from '../api/var';

const MovieScreen = (props) => {
  const [key, setKey] = useState('');

  const getData = async () => {
    const id = props.route.params.idFromCards;
    // console.log('id di movie screen ' + id);
    try {
      const res = await Axios.get(
        `${Variable.host}movie/${id}/videos?api_key=${Variable.api_key_tmdb}&language=en-US`,
      );
      if (res !== null) {
        setKey(res.data.results[0].key);
      } else if (dataVideo === null) {
        alert('Movie has no trailer');
      } else {
        console.log('error');
      }
      // setKey(res.data.results[0].key);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const YTubeApi = 'AIzaSyCPdVq0oKnSbln6lAXnEhIptxu9JYVXZP8';

  return (
    <View style={{backgroundColor: 'black', flex: 1, padding: 10}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Trailer</Text>
        <YouTube
          apiKey={YTubeApi}
          videoId={key} // The YouTube video ID
          // videoId="1d0Zf9sXlHk" // The YouTube video ID
          play // control playback of video with true/false
          loop // control whether the video should loop when ended
          style={{alignSelf: 'stretch', height: 300}}
        />
      </View>
    </View>
  );
};

export default MovieScreen;
