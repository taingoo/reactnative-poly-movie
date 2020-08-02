import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import axiosConfig from '../api/axios';
import PeopleItem from '../components/List/PeopleItem';
import PeopleHolder from '../components/Placeholder/PeopleHolder';
import SearchBar from '../components/SearchBar';

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const numColumns = 2;

  useEffect(() => {
    axiosConfig
      .get('/person/popular', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
          page: page,
        },
      })
      .then((response) => {
        setPopular((oldData) => oldData.concat(response.data.results));
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <PeopleHolder />;
  }
  return (
    <View style={{paddingBottom: 120}}>
      <SearchBar goTo="SearchScreen" backTo="Main" tag="people" />

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
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}
