import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axiosConfig from '../../api/axios';
import Header from '../../components/Header/HeaderPeople';
import common from '../../themes/common';
import * as helper from '../../utils/helper';
import MovieItem from '../../components/List/MovieItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function DetailPeople({route}) {
  const [data, setData] = useState({});
  const [gender, setGender] = useState('');

  useEffect(() => {
    axiosConfig
      .get(`/person/${route.params.id}`, {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setData(response.data);
        setGender(helper.getGender(response.data.gender));
      });
  }, [route.params.id]);
  return (
    <View style={{flex: 1, paddingBottom: 50}}>
      <Header backTo="Main" image={data.profile_path}></Header>
      <ScrollView>
        <View style={styles.body}>
          <Text style={common.heading}>PERSONAL INFO</Text>
          <View style={common.row}>
            <Text style={styles.left_block}>Name</Text>
            <Text style={[styles.right_block, {fontFamily: 'Roboto-Bold'}]}>
              {data.name}
            </Text>
          </View>
          <View style={common.row}>
            <Text style={styles.left_block}>Gender</Text>
            <Text style={styles.right_block}>{gender}</Text>
          </View>
          <View style={common.row}>
            <Text style={styles.left_block}>Birthday</Text>
            <Text style={styles.right_block}>{data.birthday}</Text>
          </View>
          <View style={common.row}>
            <Text style={styles.left_block}>Place of Birth</Text>
            <Text style={styles.right_block}>{data.place_of_birth}</Text>
          </View>
          <View style={common.row}>
            <Text style={styles.left_block}>Biography</Text>
            <Text style={styles.right_block}>{data.biography}</Text>
          </View>

          <Text style={[common.heading, {marginTop: 20}]}>KNOWN FOR</Text>
          <FlatList
            horizontal
            data={route.params.knownFor}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}></FlatList>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  left_block: {
    width: width * 0.3,
    fontFamily: 'Roboto-Light',
  },
  right_block: {
    width: width * 0.7,
    fontFamily: 'Roboto-Light',
  },
});
