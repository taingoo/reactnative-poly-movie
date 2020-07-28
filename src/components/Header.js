import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Header({
  navigation,
  backdrop,
  poster,
  title,
  genres,
  release_date,
  runtime,
  budget,
}) {
  return (
    <View style={styles.container}>
      {/* backdrop */}
      <View style={{height: 220, position: 'relative'}}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${backdrop}`,
          }}
          style={styles.backdrop}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View
          style={{backgroundColor: 'black', height: 220, opacity: 0.5}}></View>

        <Pressable
          style={{
            position: 'absolute',
            top: 50,
            left: 10,
          }}
          onPress={() => alert('back')}>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/ic_back.png')}></Image>
            <Text style={styles.backButton}>Back</Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          height: 200,
        }}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster}`,
          }}
          style={styles.poster}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={{paddingHorizontal: 10}}>
          {/* title */}
          <Text style={styles.title}>{title}</Text>
          {/* genres */}
          <Text style={styles.subtitle}>{genres}</Text>
          <View style={styles.row}>
            {/* release_date */}
            <View style={[styles.row, {marginRight: 30}]}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/ic_calendar.png')}></Image>
              <Text style={styles.subtitle}>{release_date}</Text>
            </View>

            {/* runtime */}
            <View style={styles.row}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/ic_clock.png')}></Image>
              <Text style={styles.subtitle}>{runtime}</Text>
            </View>
          </View>

          {/* budget */}
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/ic_money.png')}></Image>
            <Text style={styles.subtitle}>{budget}$</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    position: 'absolute',
    height: 220,
    width: '100%',
  },
  poster: {
    marginTop: -40,
    height: 170,
    width: width * 0.31,
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
    height: 16,
    width: 16,
  },
});
