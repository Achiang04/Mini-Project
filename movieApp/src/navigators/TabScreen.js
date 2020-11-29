import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

const Tab = createBottomTabNavigator();

import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import ReviewScreen from '../screen/ReviewScreen';
// import HomeScreenApi from '../ApiBE/HomeScreenApi';

export default function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Review',
          tabBarIcon: () => (
            <FontAwesome5 name={'comment'} color={'white'} size={24} />
          ),
        }}
        name="ReviewScreen"
        component={ReviewScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome5 name={'home'} color={'white'} size={24} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
        // name="HomeScreenApi"
        // component={HomeScreenApi}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <FontAwesome5 name={'user-circle'} color={'white'} size={24} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
