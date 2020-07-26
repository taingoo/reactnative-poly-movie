import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function TVItem({image}) {
  return (
    <View>
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
  image: {
    backgroundColor: '#D8D8D8',
    borderRadius: 5,
    margin: width * 0.02,
    width: width * 0.96,
    height: 200,
  },
});
