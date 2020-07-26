import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TVItem from '../../../components/TVItem';
import Title from '../../../components/Title';
import Header from '../../../components/Header';
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
    axios
      .get(
        'https://api.themoviedb.org/3/tv/popular?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setPopular(response.data.results);
      });
  };

  const getAiring = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/airing_today?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setAiring(response.data.results);
      });
  };

  const getOnTV = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/on_the_air?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setOnTV(response.data.results);
      });
  };

  const getTopRated = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/top_rated?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setTopRated(response.data.results);
      });
  };

  return (
    <View style={{paddingBottom: 110}}>
      <Header></Header>
      <ScrollView>
        <Title title="POPULAR"></Title>
        <FlatList
          horizontal
          data={popular}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <TVItem image={item.backdrop_path} />}
        />

        <Title title="AIRING TODAY"></Title>
        <FlatList
          horizontal
          data={airing}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <TVItem image={item.backdrop_path} />}
        />

        <Title title="ON TV"></Title>
        <FlatList
          horizontal
          data={onTV}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <TVItem image={item.backdrop_path} />}
        />

        <Title title="TOP RATED"></Title>
        <FlatList
          horizontal
          data={toprated}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <TVItem image={item.backdrop_path} />}
        />
      </ScrollView>
    </View>
  );
}
