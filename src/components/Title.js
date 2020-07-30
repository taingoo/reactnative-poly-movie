import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import common from '../themes/common';
import {useNavigation} from '@react-navigation/native';

export default function Title({title, goTo, tag}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={common.heading}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(goTo, {tag})}>
        <Text style={styles.more}>SEE ALL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  more: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'black',
    marginVertical: 8,
  },
});
