import React from 'react';
import {Text, View} from 'react-native';
import common from '../../themes/common';

export default function Overview({overview}) {
  return (
    <View style={common.container} Î>
      <Text style={common.heading}>Overview</Text>
      <Text style={common.subtitle}>{overview}</Text>
    </View>
  );
}
