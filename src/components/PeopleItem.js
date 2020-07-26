import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MovieItem({image, name}) {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${image}`,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    margin: width * 0.01,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: width * 0.475,
    height: 220,
  },
  name: {
    paddingHorizontal: 3,
    paddingVertical: 5,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
});