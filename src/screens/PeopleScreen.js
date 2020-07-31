import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axiosConfig from '../api/axios';
import PeopleItem from '../components/List/PeopleItem';
import SearchBar from '../components/SearchBar';
import {ScrollView} from 'react-native-gesture-handler';
import PeopleHolder from '../components/Placeholder/PeopleHolder';

const numColumns = 2;

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosConfig
      .get('/person/popular', {
        params: {api_key: 'cfb5e7441170e569be1265dadbb2df82'},
      })
      .then((response) => {
        setPopular(response.data.results);
        setLoading(true);
      });
  }, []);

  if (loading) {
    return (
      <View style={{paddingBottom: 120}}>
        <SearchBar goTo="SearchScreen" backTo="Main" tag="people"></SearchBar>

        <ScrollView>
          <FlatList
            numColumns={numColumns}
            data={popular}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <PeopleItem
                goTo="DetailPeople"
                id={item.id}
                knownFor={item.known_for}
                image={item.profile_path}
                name={item.name}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  } else {
    return <PeopleHolder></PeopleHolder>;
  }
}
