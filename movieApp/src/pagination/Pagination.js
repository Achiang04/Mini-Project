import React from 'react';
import {View, ListItem, FlatList} from 'react-native';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View>
      <FlatList
        data={pageNumbers}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListItem item={item} />}
        onPress={(e) => paginate(e)}
      />
    </View>
  );
};
export default Pagination;
