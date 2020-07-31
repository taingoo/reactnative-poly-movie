import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MovieItem({goTo, id, image}) {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate(goTo, {id})}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${image}`,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#D8D8D8',
    borderRadius: 5,
    marginRight: width * 0.01,
    marginBottom: 5,
    width: width * 0.32,
    height: 180,
  },
});
