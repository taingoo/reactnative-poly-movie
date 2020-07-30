import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axiosConfig from '../api/axios';
import TVItem from '../components/List/TVItem';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import {ScrollView} from 'react-native-gesture-handler';

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [airing, setAiring] = useState([]);
  const [onTV, setOnTV] = useState([]);
  const [toprated, setTopRated] = useState([]);

  useEffect(() => {
    getPopular();
    getAiring();
    getOnTV();
    getTopRated();
  }, []);

  const getPopular = () => {
    axiosConfig
      .get('/tv/popular', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setPopular(response.data.results);
      });
  };

  const getAiring = () => {
    axiosConfig
      .get('/tv/airing_today', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setAiring(response.data.results);
      });
  };

  const getOnTV = () => {
    axiosConfig
      .get('/tv/on_the_air', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setOnTV(response.data.results);
      });
  };

  const getTopRated = () => {
    axiosConfig
      .get('/tv/top_rated', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setTopRated(response.data.results);
      });
  };

  return (
    <View style={{paddingBottom: 110}}>
      <SearchBar goTo="SearchScreen" backTo="Main"></SearchBar>

      <ScrollView style={{padding: 5}}>
        <Title title="POPULAR"></Title>
        <FlatList
          horizontal
          data={popular}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
          )}
        />

        <Title title="AIRING TODAY"></Title>
        <FlatList
          horizontal
          data={airing}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
          )}
        />

        <Title title="ON TV"></Title>
        <FlatList
          horizontal
          data={onTV}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
          )}
        />

        <Title title="TOP RATED"></Title>
        <FlatList
          horizontal
          data={toprated}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
          )}
        />
      </ScrollView>
    </View>
  );
}
