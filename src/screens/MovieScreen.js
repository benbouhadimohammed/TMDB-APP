import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../api/MovieApi';
import MovieCard from '../components/MovieCard';

export default function MoviesScreen() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetchMovies('now_playing').then(setNowPlaying);
    fetchMovies('popular').then(setPopular);
    fetchMovies('top_rated').then(setTopRated);
    fetchMovies('upcoming').then(setUpcoming);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Now Playing</Text>
      <FlatList
        data={nowPlaying}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        style={styles.list}
      />
     

      <Text style={styles.sectionTitle}>Popular</Text>
      <FlatList
        data={popular}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>Top Rated</Text>
      <FlatList
        data={topRated}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>Upcoming</Text>
      <FlatList
        data={upcoming}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
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