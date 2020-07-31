import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axiosConfig from '../api/axios';
import TVItem from '../components/List/TVItem';
import TVHolder from '../components/Placeholder/TVHolder';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

export default function MovieScreen() {
  const [popular, setPopular] = useState([]);
  const [airing, setAiring] = useState([]);
  const [onTV, setOnTV] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
      });
  };

  if (loading) {
    return (
      <View style={{paddingBottom: 120}}>
        <SearchBar goTo="SearchScreen" backTo="Main" tag="tv" />

        <ScrollView style={{paddingHorizontal: 5}}>
          <Title title="POPULAR" goTo="ViewAllTVScreen" tag="popular" />
          <FlatList
            horizontal
            data={popular}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
            )}
          />

          <Title title="AIRING TODAY" goTo="ViewAllTVScreen" tag="airing" />
          <FlatList
            horizontal
            data={airing}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
            )}
          />

          <Title title="ON TV" goTo="ViewAllTVScreen" tag="ontv" />
          <FlatList
            horizontal
            data={onTV}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TVItem goTo="DetailTV" id={item.id} image={item.backdrop_path} />
            )}
          />

          <Title title="TOP RATED" goTo="ViewAllTVScreen" tag="toprated" />
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
  } else {
    return <TVHolder />;
  }
}
