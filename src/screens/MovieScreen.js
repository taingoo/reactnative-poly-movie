import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axiosConfig from '../api/axios';
import MovieItem from '../components/List/MovieItem';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import {ScrollView} from 'react-native-gesture-handler';
import MovieHolder from '../components/Placeholder/MovieHolder';

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [nowplaying, setNowPlaying] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPopular();
    getNowPlaying();
    getUpComing();
    getTopRated();
  }, []);

  const getPopular = () => {
    axiosConfig
      .get('/movie/popular', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setPopular(response.data.results);
      });
  };

  const getNowPlaying = () => {
    axiosConfig
      .get('movie/now_playing', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setNowPlaying(response.data.results);
      });
  };

  const getUpComing = () => {
    axiosConfig
      .get('/movie/upcoming', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setUpComing(response.data.results);
      });
  };

  const getTopRated = () => {
    axiosConfig
      .get('/movie/top_rated', {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setTopRated(response.data.results);
        setLoading(true);
      });
  };

  if (loading) {
    return (
      <View style={{marginBottom: 120}}>
        <SearchBar goTo="SearchScreen" backTo="Main" tag="movie"></SearchBar>

        <ScrollView style={{paddingHorizontal: 5}}>
          <Title
            title="POPULAR"
            goTo="ViewAllMovieScreen"
            tag="popular"></Title>
          <FlatList
            horizontal
            data={popular}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
          />

          <Title
            title="NOW PLAYING"
            goTo="ViewAllMovieScreen"
            tag="nowplaying"></Title>
          <FlatList
            horizontal
            data={nowplaying}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
          />

          <Title
            title="UP COMING"
            goTo="ViewAllMovieScreen"
            tag="upcoming"></Title>
          <FlatList
            horizontal
            data={upcoming}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
          />

          <Title
            title="TOP RATED"
            goTo="ViewAllMovieScreen"
            tag="toprated"></Title>
          <FlatList
            horizontal
            data={toprated}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  } else {
    return <MovieHolder></MovieHolder>;
  }
}
