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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const getPopular = axiosConfig.get(`/movie/popular?api_key=${apiKey}`);
      const getNowPlaying = axiosConfig.get(
        `/movie/now_playing?api_key=${apiKey}`,
      );
      const getUpComing = axiosConfig.get(`/movie/upcoming?api_key=${apiKey}`);
      const getTopRated = axiosConfig.get(`/movie/top_rated?api_key=${apiKey}`);
      const [
        popularData,
        nowPlayingData,
        upComingData,
        topRatedData,
      ] = await Promise.all([
        getPopular,
        getNowPlaying,
        getUpComing,
        getTopRated,
      ]);

      setPopular(popularData.data.results);
      setNowPlaying(nowPlayingData.data.results);
      setUpComing(upComingData.data.results);
      setTopRated(topRatedData.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const _renderItem = ({item}) => (
    <MovieItem goTo="DetailMovie" id={item.id} image={item.poster_path} />
  );

  const _renderList = (title, tag, data) => {
    return (
      <>
        <Title title={title} goTo="ViewAllMovieScreen" tag={tag} />
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </>
    );
  };

  if (loading) {
    return <MovieHolder />;
  }
  return (
    <View style={{marginBottom: 120}}>
      <SearchBar goTo="SearchScreen" backTo="Main" tag="movie" />

      <ScrollView style={{paddingHorizontal: 5}}>
        {_renderList('POPULAR', 'popular', popular)}
        {_renderList('NOW PLAYING', 'nowplaying', nowplaying)}
        {_renderList('UP COMING', 'upcoming', upcoming)}
        {_renderList('TOP RATED', 'top_rated', toprated)}
      </ScrollView>
    </View>
  );
}
