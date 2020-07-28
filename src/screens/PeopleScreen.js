import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axiosConfig from '../api/axios';
import PeopleItem from '../components/List/PeopleItem';
import SearchBar from '../components/SearchBar';
import {ScrollView} from 'react-native-gesture-handler';

const numColumns = 2;

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axiosConfig
      .get('/person/popular', {
        params: {api_key: 'cfb5e7441170e569be1265dadbb2df82'},
      })
      .then((response) => {
        setPopular(response.data.results);
      });
  }, []);

  return (
    <View style={{paddingBottom: 110}}>
      <SearchBar></SearchBar>
      <ScrollView>
        <FlatList
          numColumns={numColumns}
          data={popular}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <PeopleItem image={item.profile_path} name={item.name} />
          )}
        />
      </ScrollView>
    </View>
  );
}
