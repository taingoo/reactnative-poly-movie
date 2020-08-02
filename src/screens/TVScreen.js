import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axiosConfig, {apiKey} from '../api/axios';
import TVItem from '../components/List/TVItem';
import TVHolder from '../components/Placeholder/TVHolder';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

export default function MovieScreen() {
  const [popular, setPopular] = useState();
  const [airing, setAiring] = useState();
  const [onTV, setOnTV] = useState();
  const [toprated, setTopRated] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTVs();
  }, []);

  const getTVs = async () => {
    try {
      const getPopular = axiosConfig.get(`/tv/popular?api_key=${apiKey}`);
      const getAiring = axiosConfig.get(`/tv/airing_today?api_key=${apiKey}`);
      const getOnTV = axiosConfig.get(`/tv/on_the_air?api_key=${apiKey}`);
      const getTopRated = axiosConfig.get(`/tv/top_rated?api_key=${apiKey}`);
      const [
        popularData,
        aringData,
        onTVData,
        topRatedData,
      ] = await Promise.all([getPopular, getAiring, getOnTV, getTopRated]);

      setPopular(popularData.data.results);
      setAiring(aringData.data.results);
      setOnTV(onTVData.data.results);
      setTopRated(topRatedData.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const _renderItem = ({item}) => (
    <TVItem
      goTo="DetailTV"
      id={item.id}
      image={item.backdrop_path}
      title={item.name}
    />
  );

  const _renderList = (title, tag, data) => {
    return (
      <>
        <Title title={title} goTo="ViewAllTVScreen" tag={tag} />
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
    return <TVHolder />;
  }
  return (
    <View style={{paddingBottom: 120}}>
      <SearchBar goTo="SearchScreen" backTo="Main" tag="tv" />

      <ScrollView style={{paddingHorizontal: 5}}>
        {_renderList('POPULAR', 'popular', popular)}
        {_renderList('AIRING TODAY', 'airing', airing)}
        {_renderList('ON TV', 'ontv', onTV)}
        {_renderList('TOP RATED', 'top_rated', toprated)}
      </ScrollView>
    </View>
  );
}
