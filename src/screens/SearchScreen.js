import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import axiosConfig from '../api/axios';
import MovieItem from '../components/List/MovieItem';
import PeopleItem from '../components/List/PeopleItem';
import TVItem from '../components/List/TVItem';
import SearchBar from '../components/SearchBar';

const TAGs = {
  movie: 'movie',
  tv: 'tv',
  people: 'person',
};

export default function SearchScreen({route}) {
  const [data, setData] = useState([]);
  const tag = route.params.tag;
  const numColumn = 3;

  useEffect(() => {
    axiosConfig
      .get(`/search/${TAGs[tag]}`, {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
          query: `${route.params.query}`,
        },
      })
      .then((response) => {
        setData(response.data.results);
      });
  }, [route.params.query, tag]);

  const _renderItem = ({item}) => {
    if (tag === 'movie') {
      return (
        <MovieItem goTo="DetailMovie" id={item.id} image={item.poster_path} />
      );
    } else if (tag === 'tv') {
      return <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />;
    }
    return (
      <PeopleItem
        goTo="DetailPeople"
        id={item.id}
        knownFor={item.known_for}
        image={item.profile_path}
        name={item.name}
      />
    );
  };

  return (
    <View style={{marginBottom: 120}}>
      <SearchBar goTo="SearchScreen" backTo="Main" tag={route.params.tag} />
      <FlatList
        numColumns={numColumn}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        style={{padding: 5}}
      />
    </View>
  );
}
