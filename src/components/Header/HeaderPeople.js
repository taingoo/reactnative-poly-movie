import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import common from '../../themes/common';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Header({backTo, image}) {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient colors={['#FF6A00', '#EE0979']} style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle="light-content"
        />

        <TouchableOpacity
          style={{
            width: 100,
            position: 'absolute',
            top: 40,
            left: 10,
          }}
          onPress={() => navigation.navigate(backTo)}>
          <View style={common.row}>
            <Image
              style={common.icon}
              source={require('../../assets/icons/ic_back.png')}></Image>
            <Text style={common.backButton}>Back</Text>
          </View>
        </TouchableOpacity>

        {/* <Image
        style={styles.background}
        resizeMode="stretch"
        source={require('../../assets/images/backgroundHeaderPeople.png')}
      /> */}
      </LinearGradient>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${image}`,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
  },
  image: {
    backgroundColor: 'white',
    marginTop: -70,
    borderRadius: 100,
    alignSelf: 'center',
    height: 140,
    width: 140,
  },
  background: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    height: 120,
    width: width * 0.9,
  },
});
