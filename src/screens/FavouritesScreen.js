
import { FlatList, Text, View } from 'react-native';
import { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import MovieCard from '../components/MovieCard';

export default function FavouritesScreen() {
  const { favourites } = useContext(FavouritesContext);

  if (favourites.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No favourites yet ❤️</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favourites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
    />
  );
}


