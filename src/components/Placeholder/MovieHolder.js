import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SearchBar from '../SearchBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MovieHolder() {
  return (
    <View style={{flex: 1, marginBottom: 120}}>
      <SearchBar></SearchBar>

      <SkeletonPlaceholder>
        <View style={styles.container}>
          <View style={styles.title} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.title} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.title} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: width * 0.02,
  },
  title: {
    borderRadius: 5,
    height: 40,
    width: width * 0.96,
    marginBottom: 10,
  },
  block: {
    borderRadius: 5,
    width: width * 0.3,
    height: 170,
    marginRight: width * 0.03,
  },
});
