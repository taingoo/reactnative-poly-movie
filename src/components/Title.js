import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import common from '../themes/common';

export default function Title({title}) {
  const onPress = () => {
    alert(title);
  };
  return (
    <View style={styles.container}>
      <Text style={common.heading}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
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
