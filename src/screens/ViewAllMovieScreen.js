import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import axiosConfig from '../api/axios';
import MovieItem from '../components/List/MovieItem';
import NavBar from '../components/NavBar';

export default function ViewAllMovieScreen({route}) {
  const [data, setData] = useState({});
  const [popular, setPopular] = useState([]);
  const [nowplaying, setNowPlaying] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [page, setPage] = useState(1);
  let numColumn = 3;

  useEffect(() => {
    if (`${route.params.tag}` === 'popular') {
      axiosConfig
        .get('/movie/popular', {
          params: {
            api_key: 'cfb5e7441170e569be1265dadbb2df82',
            page: page,
          },
        })
        .then((response) => {
          setData(response.data);
          setPopular(response.data.results);
        });
    } else if (`${route.params.tag}` === 'nowplaying') {
      axiosConfig
        .get('movie/now_playing', {
          params: {
            api_key: 'cfb5e7441170e569be1265dadbb2df82',
            page: page,
          },
        })
        .then((response) => {
          setData(response.data);
          setNowPlaying(response.data.results);
        });
    } else if (`${route.params.tag}` === 'upcoming') {
      axiosConfig
        .get('/movie/upcoming', {
          params: {
            api_key: 'cfb5e7441170e569be1265dadbb2df82',
            page: page,
          },
        })
        .then((response) => {
          setData(response.data);
          setUpComing(response.data.results);
        });
    } else {
      axiosConfig
        .get('/movie/top_rated', {
          params: {
            api_key: 'cfb5e7441170e569be1265dadbb2df82',
            page: page,
          },
        })
        .then((response) => {
          setData(response.data);
          setTopRated(response.data.results);
        });
    }
  }, [page, route.params.tag]);

  if (`${route.params.tag}` === 'popular') {
    return (
      <View style={styles.container}>
        <NavBar page={page} total={data.total_pages} backTo="Main" />
        <View style={{paddingHorizontal: 5}}>
          <FlatList
            numColumns={numColumn}
            data={popular}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
            onEndReached={() => setPage(page + 1)}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    );
  } else if (`${route.params.tag}` === 'nowplaying') {
    return (
      <View style={styles.container}>
        <NavBar page={page} total={data.total_pages} backTo="Main" />
        <View style={{paddingHorizontal: 5}}>
          <FlatList
            numColumns={numColumn}
            data={nowplaying}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
            onEndReached={() => setPage(page + 1)}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    );
  } else if (`${route.params.tag}` === 'upcoming') {
    return (
      <View style={styles.container}>
        <NavBar page={page} total={data.total_pages} backTo="Main" />
        <View style={{paddingHorizontal: 5}}>
          <FlatList
            numColumns={numColumn}
            data={upcoming}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
            onEndReached={() => setPage(page + 1)}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <NavBar page={page} total={data.total_pages} backTo="Main" />
        <View style={{paddingHorizontal: 5}}>
          <FlatList
            numColumns={numColumn}
            data={toprated}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <MovieItem
                goTo="DetailMovie"
                id={item.id}
                image={item.poster_path}
              />
            )}
            onEndReached={() => setPage(page + 1)}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 120},
});
