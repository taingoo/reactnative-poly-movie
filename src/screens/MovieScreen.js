import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axiosConfig, {apiKey} from '../api/axios';
import MovieItem from '../components/List/MovieItem';
import MovieHolder from '../components/Placeholder/MovieHolder';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

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
    axiosConfig.get(`/movie/popular?api_key=${apiKey}`).then((response) => {
      setPopular(response.data.results);
    });
  };

  const getNowPlaying = () => {
    axiosConfig.get(`movie/now_playing?api_key=${apiKey}`).then((response) => {
      setNowPlaying(response.data.results);
    });
  };

  const getUpComing = () => {
    axiosConfig.get(`/movie/upcoming?api_key=${apiKey}`).then((response) => {
      setUpComing(response.data.results);
    });
  };

  const getTopRated = () => {
    axiosConfig.get(`/movie/top_rated?api_key=${apiKey}`).then((response) => {
      setTopRated(response.data.results);
      setLoading(true);
    });
  };

  const _renderItem = ({item}) => (
    <MovieItem goTo="DetailMovie" id={item.id} image={item.poster_path} />
  );

  if (loading) {
    return (
      <View style={{marginBottom: 120}}>
        <SearchBar goTo="SearchScreen" backTo="Main" tag="movie" />

        <ScrollView style={{paddingHorizontal: 5}}>
          <Title title="POPULAR" goTo="ViewAllMovieScreen" tag="popular" />
          <FlatList
            horizontal
            data={popular}
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
          />

          <Title
            title="NOW PLAYING"
            goTo="ViewAllMovieScreen"
            tag="nowplaying"
          />
          <FlatList
            horizontal
            data={nowplaying}
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
          />

          <Title title="UP COMING" goTo="ViewAllMovieScreen" tag="upcoming" />
          <FlatList
            horizontal
            data={upcoming}
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
          />

          <Title title="TOP RATED" goTo="ViewAllMovieScreen" tag="toprated" />
          <FlatList
            horizontal
            data={toprated}
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
          />
        </ScrollView>
      </View>
    );
  } else {
    return <MovieHolder />;
  }
}
