import { View, Text, FlatList, ScrollView } from 'react-native';
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
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 10, }}>
        Now Playing
      </Text>

      <FlatList
        data={nowPlaying}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />

      <Text>Popular</Text>
        <FlatList
           data={popular}
           horizontal
           renderItem={({ item }) => <MovieCard movie={item} />}
        />

     <Text>Top Rated</Text>
         <FlatList
           data={topRated}
           horizontal
           renderItem={({ item }) => <MovieCard movie={item} />}
        />

     <Text>Upcoming</Text>
        <FlatList
           data={upcoming}
           horizontal
           renderItem={({ item }) => <MovieCard movie={item} />}
         />

   </ScrollView>
    

  );
  
    
  
}



