import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axiosConfig from '../../api/axios';
import SearchBar from '../../components/SearchBar';
import common from '../../themes/common';

export default function SearchScreen({route}) {
  const [data, setData] = useState();

  useEffect(() => {
    axiosConfig
      .get('/search/movie', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
          query: `${route.params.query}`,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      });
  }, [route.params.query]);
  return (
    <View>
      <SearchBar goTo="SearchScreen" backTo="Main"></SearchBar>
    </View>
  );
}
