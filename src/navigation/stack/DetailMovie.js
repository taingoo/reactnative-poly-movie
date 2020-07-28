import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/Header';

export default function DetailMovie({route}) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=cfb5e7441170e569be1265dadbb2df82`,
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, [route.params.id]);

  return (
    <View>
      <Header
        backdrop={data.backdrop_path}
        poster={data.poster_path}
        title={data.title}
        release_date={data.release_date}
        runtime={data.runtime}></Header>
    </View>
  );
}
