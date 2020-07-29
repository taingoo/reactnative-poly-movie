import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  heading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#E54028',
    marginVertical: 8,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  subtitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 4 : 0,
  },
});
