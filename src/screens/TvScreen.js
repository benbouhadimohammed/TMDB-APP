import { Text, FlatList, ScrollView, StyleSheet } from 'react-native';
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
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Airing Today</Text>
      <FlatList
        data={airingToday}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>On The Air</Text>
      <FlatList
        data={onTheAir}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>Popular</Text>
      <FlatList
        data={popular}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>Top Rated</Text>
      <FlatList
        data={topRated}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
        style={styles.list}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#fff',
  },
  list: {
    marginBottom: 10,
  },
});