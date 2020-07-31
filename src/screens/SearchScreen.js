import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import axiosConfig from '../api/axios';
import MovieItem from '../components/List/MovieItem';
import PeopleItem from '../components/List/PeopleItem';
import TVItem from '../components/List/TVItem';
import SearchBar from '../components/SearchBar';

export default function SearchScreen({route}) {
  const [data, setData] = useState([]);
  const numColumn = 3;

  useEffect(() => {
    if (`${route.params.tag}` === 'movie') {
      axiosConfig
        .get('/search/movie', {
          params: {
            api_key: 'cfb5e7441170e569be1265dadbb2df82',
            query: `${route.params.query}`,
          },
        })
        .then((response) => {
          setData(response.data.results);
        });
    } else if (`${route.params.tag}` === 'tv') {
      axiosConfig
        .get('/search/tv', {
          params: {
            api_key: 'cfb5e7441170e569be1265dadbb2df82',
            query: `${route.params.query}`,
          },
        })
        .then((response) => {
          setData(response.data.results);
        });
    } else {
      axiosConfig
        .get('/search/person', {
          params: {
            api_key: 'cfb5e7441170e569be1265dadbb2df82',
            query: `${route.params.query}`,
          },
        })
        .then((response) => {
          setData(response.data.results);
        });
    }
  }, [route.params.query, route.params.tag]);

  if (`${route.params.tag}` === 'movie') {
    return (
      <View style={{marginBottom: 120}}>
        <SearchBar goTo="SearchScreen" backTo="Main" tag={route.params.tag} />
        <FlatList
          numColumns={numColumn}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <MovieItem
              goTo="DetailMovie"
              id={item.id}
              image={item.poster_path}
            />
          )}
          style={{padding: 5}}
        />
      </View>
    );
  } else if (`${route.params.tag}` === 'tv') {
    return (
      <View style={{marginBottom: 120}}>
        <SearchBar goTo="SearchScreen" backTo="Main" tag={route.params.tag} />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
          )}
          style={{padding: 5}}
        />
      </View>
    );
  } else {
    return (
      <View style={{marginBottom: 120}}>
        <SearchBar goTo="SearchScreen" backTo="Main" tag={route.params.tag} />
        <FlatList
          numColumns={numColumn}
          data={data}
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
          style={{padding: 5}}
        />
      </View>
    );
  }
}
