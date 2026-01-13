import { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { searchMovies, searchTv } from '../api/SearchApi';
import MovieCard from '../components/MovieCard';
import TvCard from '../components/TvCard';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);

  const handleSearch = async (text) => {
    setQuery(text);
    if (text.length > 2) { // wait until user types 3+ chars
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
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Search movies or TV shows"
        value={query}
        onChangeText={handleSearch}
        style={{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      />

      <Text>Movies:</Text>
      <FlatList
        data={movieResults}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        style={{ marginBottom: 20 }}
      />

      <Text>TV Shows:</Text>
      <FlatList
        data={tvResults}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TvCard show={item} />}
      />
    </View>
  );
}
