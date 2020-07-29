import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import common from '../../themes/common';
import SeasonItem from '../../components/List/SeasonItem';

export default function Season({seasons}) {
  return (
    <View style={common.container} Î>
      <Text style={common.heading}>Season</Text>
      <FlatList
        horizontal
        data={seasons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <SeasonItem
            image={item.poster_path}
            name={item.name}
            episode_count={item.episode_count}
          />
        )}
      />
    </View>
  );
}
