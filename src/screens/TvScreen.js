import { Text, FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchTvShows } from '../api/TvApi';
import TvCard from '../components/TvCard';

export default function TvScreen() {
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetchTvShows('airing_today').then(setAiringToday);
    fetchTvShows('on_the_air').then(setOnTheAir);
    fetchTvShows('popular').then(setPopular);
    fetchTvShows('top_rated').then(setTopRated);
  }, []);

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text>Airing Today</Text>
      <FlatList
        data={airingToday}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
      />

      <Text>On The Air</Text>
      <FlatList
        data={onTheAir}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
      />

      <Text>Popular</Text>
      <FlatList
        data={popular}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
      />

      <Text>Top Rated</Text>
      <FlatList
        data={topRated}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
      />
    </ScrollView>
  );
}

