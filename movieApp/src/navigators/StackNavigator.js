import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screen/LoginScreen';
import RegisScreen from '../screen/RegisScreen';
import TabScreen from '../navigators/TabScreen';
import SplashScreen from '../screen/SplashScreen';
import SearchScreen from '../screen/SearchScreen';
import GenreScreen from '../screen/GenreScreen';
import MovieScreen from '../MoviePlayer/MovieScreen';
import AllReviewScreen from '../screen/AllReviewScreen';
// import Page from '../pagination/Page';

const RootStack = createStackNavigator();

export default function StackNavigator() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="RegisScreen" component={RegisScreen} />
      <RootStack.Screen name="TabScreen" component={TabScreen} />
      <RootStack.Screen name="SearchScreen" component={SearchScreen} />
      <RootStack.Screen name="GenreScreen" component={GenreScreen} />
      <RootStack.Screen name="MovieScreen" component={MovieScreen} />
      <RootStack.Screen name="AllReviewScreen" component={AllReviewScreen} />

      {/* <RootStack.Screen name="Page" component={Page} /> */}
    </RootStack.Navigator>
  );
}
