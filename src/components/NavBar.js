import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from '../themes/common';

export default function NavBar({page, total, backTo}) {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#FF6A00', '#EE0979']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <Pressable onPress={() => navigation.navigate(backTo)}>
        <View style={{width: 25}}>
          <Image
            style={styles.icon}
            source={require('../assets/icons/left-chevron.png')}
          />
        </View>
      </Pressable>

      <View
        style={[
          common.row,
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 25,
          },
        ]}>
        <Text style={styles.text}>{page}</Text>
        <Text style={styles.text}> / </Text>
        <Text style={styles.text}>{total}</Text>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingHorizontal: 5,
    marginBottom: 10,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  text: {
    fontFamily: 'Roboto-Black',
    fontSize: 24,
    color: 'white',
  },
  icon: {
    height: 24,
    marginTop: 5,
    width: 24,
  },
});
