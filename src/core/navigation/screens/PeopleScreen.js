import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PeopleItem from '../../../components/PeopleItem';
import {ScrollView} from 'react-native-gesture-handler';

const numColumns = 2;

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/person/popular?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setPopular(response.data.results);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          numColumns={numColumns}
          data={popular}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <PeopleItem image={item.profile_path} name={item.name} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
