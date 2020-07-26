import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Header() {
  const [value, onChangeText] = useState('');
  return (
    <LinearGradient colors={['#FF6A00', '#EE0979']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <TextInput
        style={styles.input}
        placeholder="Search Here"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <Image
        style={styles.tinyLogo}
        source={require('../assets/icons/SuBeeTeam.png')}
      />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 3,
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    backgroundColor: 'white',
    padding: 5,
    flex: 4,
    height: 40,
    marginBottom: 5,
  },
  tinyLogo: {
    flex: 1,
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
