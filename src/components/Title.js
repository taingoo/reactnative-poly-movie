import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Title({title}) {
  const onPress = () => {
    alert(title);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#E54028',
    margin: 5,
  },
  more: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'black',
    margin: 5,
  },
});
