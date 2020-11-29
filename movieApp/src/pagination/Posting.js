import React from 'react';
import {View, Text} from 'react-native';

const Posting = ({posts, loading}) => {
  if (loading) {
    return <Text>Loading ...</Text>;
  }

  return (
    <View>
      <Text>{posts.title}</Text>
    </View>
  );
};

export default Posting;
