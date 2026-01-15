import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import MovieCard from '../components/MovieCard';

export default function FavouritesScreen() {
  const { favourites } = useContext(FavouritesContext);

  if (favourites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favourites yet ❤️</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#fff',
    fontSize: 16,
  },
  listContent: {
    padding: 10,
  },
});