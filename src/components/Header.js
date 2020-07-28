import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
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
}) {
  return (
    <View style={styles.container}>
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
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}> askdjvbkjsdbfvj</Text>
          <View style={styles.row}>
            <View style={[styles.row, {marginRight: 30}]}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/ic_calendar.png')}></Image>
              <Text style={styles.subtitle}>{release_date}</Text>
            </View>

            <View style={styles.row}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/ic_clock.png')}></Image>
              <Text style={styles.subtitle}>{runtime}</Text>
            </View>
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
    fontFamily: 'Roboto-Thin',
    fontSize: 14,
    marginBottom: 3,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
    height: 16,
    width: 16,
  },
});
