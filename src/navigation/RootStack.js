import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './stack/Main';
import DetailMovie from './stack/DetailMovie';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainStack" component={Main} />
        <Stack.Screen name="DetailMovie" component={DetailMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
