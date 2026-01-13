import { FlatList, Text, View } from 'react-native';
import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';

export default function WatchlistScreen() {
  const { watchlist } = useContext(WatchlistContext);

  if (watchlist.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No items in watchlist yet ➕</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={watchlist}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
    />
  );
}

