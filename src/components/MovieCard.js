import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { IMAGE_BASE_URL } from '../config/api';
import { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import { WatchlistContext } from '../context/WatchlistContext';



export default function MovieCard({ movie }) {
  const { toggleFavourite } = useContext(FavouritesContext);
  const { toggleWatchlist } = useContext(WatchlistContext);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: IMAGE_BASE_URL + movie.poster_path }}
        style={styles.image}
      />
      <Text numberOfLines={1} style={styles.title}>
        {movie.title}
      </Text>
      <TouchableOpacity onPress={() => toggleFavourite(movie)}>
        <Text style={{ fontSize: 18 }}>❤️</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleWatchlist(movie)}>
        <Text style={{ fontSize: 18 }}>➕</Text>
      </TouchableOpacity>


    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 12,
  },
  image: {
    height: 180,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    color: '#201e1eff',
  },
});
