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
    <LinearGradient colors={['#FF6A00', '#EE0979']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <TouchableOpacity
        style={{
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

      <FastImage
        source={{
          uri:
            'https://vnn-imgs-f.vgcloud.vn/2018/12/30/01/hacker-tung-tin-gia-pha-hoai-nganh-ban-le-viet-nam.jpg',
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
  },
  image: {
    borderRadius: 100,
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
});
