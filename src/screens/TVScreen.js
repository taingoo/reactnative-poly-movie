import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axiosConfig, {apiKey} from '../api/axios';
import TVItem from '../components/List/TVItem';
import TVHolder from '../components/Placeholder/TVHolder';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [airing, setAiring] = useState([]);
  const [onTV, setOnTV] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopular();
    getAiring();
    getOnTV();
    getTopRated();
  }, []);

  const getPopular = () => {
    axiosConfig.get(`/tv/popular?api_key=${apiKey}`).then((response) => {
      setPopular(response.data.results);
    });
  };

  const getAiring = () => {
    axiosConfig.get(`/tv/airing_today?api_key=${apiKey}`).then((response) => {
      setAiring(response.data.results);
    });
  };

  const getOnTV = () => {
    axiosConfig.get(`/tv/on_the_air?api_key=${apiKey}`).then((response) => {
      setOnTV(response.data.results);
    });
  };

  const getTopRated = () => {
    axiosConfig.get(`/tv/top_rated?api_key=${apiKey}`).then((response) => {
      setTopRated(response.data.results);
      setLoading(false);
    });
  };

  const _renderItem = ({item}) => (
    <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
  );

  if (loading) {
    return <TVHolder />;
  }
  return (
    <View style={{paddingBottom: 120}}>
      <SearchBar goTo="SearchScreen" backTo="Main" tag="tv" />

      <ScrollView style={{paddingHorizontal: 5}}>
        <Title title="POPULAR" goTo="ViewAllTVScreen" tag="popular" />
        <FlatList
          horizontal
          data={popular}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />

        <Title title="AIRING TODAY" goTo="ViewAllTVScreen" tag="airing" />
        <FlatList
          horizontal
          data={airing}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />

        <Title title="ON TV" goTo="ViewAllTVScreen" tag="ontv" />
        <FlatList
          horizontal
          data={onTV}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />

        <Title title="TOP RATED" goTo="ViewAllTVScreen" tag="toprated" />
        <FlatList
          horizontal
          data={toprated}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </ScrollView>
    </View>
  );
}
