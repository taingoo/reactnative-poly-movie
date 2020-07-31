import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import DetailMovie from './stack/DetailMovie';
import DetailPeople from './stack/DetailPeople';
import DetailTV from './stack/DetailTV';
import Main from './stack/Main';
import SearchScreen from './stack/SearchScreen';
import ViewAllMovieScreen from './stack/ViewAllMovieScreen';
import ViewAllTVScreen from './stack/ViewAllTVScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  useEffect(() => {
    SplashScreen.hide();
  });

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
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          name="ViewAllMovieScreen"
          component={ViewAllMovieScreen}
        />
        <Stack.Screen name="ViewAllTVScreen" component={ViewAllTVScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
