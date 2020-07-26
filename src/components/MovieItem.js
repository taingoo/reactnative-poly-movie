import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

import FastImage from 'react-native-fast-image';

export default function MovieItem({image}) {
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
    margin: 5,
    width: 120,
    height: 170,
  },
});
