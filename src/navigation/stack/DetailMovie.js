import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/Header';

export default function DetailMovie({navigation, route}) {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState('-');
  const [runtime, setRuntime] = useState('-');

  function getRuntime(runtime) {
    let hour = runtime / 60;
    let minute = runtime % 60;
    let time = Math.floor(hour) + 'h ' + minute + 'm';
    setRuntime(time);
  }

  function getGenres(data) {
    let str = '';
    for (let i = 0; i < data.length; i++) {
      str = str + data[i].name + ', ';
    }
    setGenres(str.substring(0, str.length - 2));
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=cfb5e7441170e569be1265dadbb2df82`,
      )
      .then((response) => {
        setData(response.data);
        getGenres(response.data.genres);
        getRuntime(response.data.runtime);
      });
  }, [route.params.id, genres]);

  return (
    <View>
      <Header
        backdrop={data.backdrop_path}
        poster={data.poster_path}
        title={data.title}
        genres={genres}
        release_date={data.release_date}
        runtime={runtime}
        budget={data.budget}></Header>
    </View>
  );
}
