import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IMAGE_BASE_URL } from '../config/api';
import { FavouritesContext } from '../context/FavouritesContext';
import { WatchlistContext } from '../context/WatchlistContext';

export default function MovieCard({ movie }) {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const { watchlist, toggleWatchlist } = useContext(WatchlistContext);
  
  const isFavourite = favourites.some(fav => fav.id === movie.id);
  const isInWatchlist = watchlist.some(w => w.id === movie.id);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: IMAGE_BASE_URL + movie.poster_path }}
        style={styles.image}
      />
      
      <Text numberOfLines={1} style={styles.title}>
        {movie.title}
      </Text>
      
      <View style={styles.infoRow}>
        <Text style={styles.rating}>
          ⭐ {movie.vote_average?.toFixed(1)}
        </Text>
        <Text style={styles.releaseDate}>
          {movie.release_date?.slice(0, 4)}  
        </Text>
      </View>
      
      {movie.popularity > 150 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Popular</Text>
        </View>
      )}
      
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => toggleFavourite(movie)}>
          <Text style={styles.icon}>{isFavourite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleWatchlist(movie)}>
          <Text style={styles.icon}>{isInWatchlist ? '✅' : '➕'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 13,
    color: '#fff',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    color: '#ffd700',
    fontSize: 11,
    fontWeight: '600',
  },
  releaseDate: {
    color: '#999',
    fontSize: 11,
  },
  badge: {
    backgroundColor: '#e50914',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginTop: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  icon: {
    fontSize: 20,
  },
});