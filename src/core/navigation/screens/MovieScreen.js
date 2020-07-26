import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieItem from '../../../components/MovieItem';
import {ScrollView} from 'react-native-gesture-handler';

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [nowplaying, setNowPlaying] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [toprated, setTopRated] = useState([]);

  useEffect(() => {
    getPopular();
    getNowPlaying();
    getUpComing();
    getTopRated();
  }, []);

  const getPopular = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setPopular(response.data.results);
      });
  };

  const getNowPlaying = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setNowPlaying(response.data.results);
      });
  };

  const getUpComing = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setUpComing(response.data.results);
      });
  };

  const getTopRated = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=cfb5e7441170e569be1265dadbb2df82',
      )
      .then((response) => {
        setTopRated(response.data.results);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>POPULAR</Text>

        <FlatList
          horizontal
          data={popular}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MovieItem image={item.poster_path} />}
        />

        <Text>NOW PLAYING</Text>

        <FlatList
          horizontal
          data={nowplaying}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MovieItem image={item.poster_path} />}
        />

        <Text>UP COMING</Text>

        <FlatList
          horizontal
          data={upcoming}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MovieItem image={item.poster_path} />}
        />

        <Text>TOP RATED</Text>

        <FlatList
          horizontal
          data={toprated}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MovieItem image={item.poster_path} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
