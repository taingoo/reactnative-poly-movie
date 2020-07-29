import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './stack/Main';
import DetailMovie from './stack/DetailMovie';
import DetailTV from './stack/DetailTV';
import DetailPeople from './stack/DetailPeople';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DetailMovie" component={DetailMovie} />
        <Stack.Screen name="DetailTV" component={DetailTV} />
        <Stack.Screen name="DetailPeople" component={DetailPeople} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
