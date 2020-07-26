import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MovieScreen from './screens/MovieScreen';
import TVScreen from './screens/TVScreen';
import PeopleScreen from './screens/PeopleScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Movie"
        tabBarOptions={{
          activeTintColor: '#E54028',
          inactiveTintColor: '#A4A4A4',
        }}>
        <Tab.Screen
          name="Movie"
          component={MovieScreen}
          options={{
            tabBarLabel: 'Movie',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="movie-open"
                color={color}
                size={23}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TV"
          component={TVScreen}
          options={{
            tabBarLabel: 'TV',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="youtube-tv"
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="People"
          component={PeopleScreen}
          options={{
            tabBarLabel: 'People',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
