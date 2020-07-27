import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainStack';
import DetailMovie from '../screens/DetailMovie';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="DetailMovie" component={DetailMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
