import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axiosConfig, {apiKey} from '../api/axios';
import PeopleItem from '../components/List/PeopleItem';
import PeopleHolder from '../components/Placeholder/PeopleHolder';
import SearchBar from '../components/SearchBar';

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const numColumns = 2;

  useEffect(() => {
    axiosConfig.get(`/person/popular?api_key=${apiKey}`).then((response) => {
      setPopular(response.data.results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <PeopleHolder />;
  }
  return (
    <View style={{paddingBottom: 120}}>
      <SearchBar goTo="SearchScreen" backTo="Main" tag="people" />

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
}
