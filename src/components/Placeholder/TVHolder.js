import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SearchBar from '../SearchBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function TVHolder() {
  return (
    <View style={{flex: 1, marginBottom: 120}}>
      <SearchBar />

      <SkeletonPlaceholder>
        <View style={styles.container}>
          <View style={styles.title} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.block} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.title} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.block} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.title} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.block} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.title} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.block} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: width * 0.03,
  },
  title: {
    borderRadius: 5,
    height: 35,
    width: width * 0.94,
    marginBottom: 10,
  },
  block: {
    borderRadius: 5,
    width: width * 0.94,
    height: 200,
    marginRight: width * 0.03,
  },
});
