import { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { searchMovies, searchTv } from '../api/SearchApi';
import MovieCard from '../components/MovieCard';
import TvCard from '../components/TvCard';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);

  const handleSearch = async (text) => {
    setQuery(text);
    if (text.length > 2) {
      const movies = await searchMovies(text);
      const tv = await searchTv(text);
      setMovieResults(movies);
      setTvResults(tv);
    } else {
      setMovieResults([]);
      setTvResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies or TV shows"
        placeholderTextColor="#666"
        value={query}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />

      {movieResults.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Movies</Text>
          <FlatList
            data={movieResults}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieCard movie={item} />}
            style={styles.list}
          />
        </>
      )}

      {tvResults.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>TV Shows</Text>
          <FlatList
            data={tvResults}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TvCard show={item} />}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  searchInput: {
    height: 50,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
  },
  list: {
    marginBottom: 20,
  },
});