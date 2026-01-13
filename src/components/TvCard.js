import { View, Image, Text, StyleSheet } from 'react-native';
import { IMAGE_BASE_URL } from '../config/api';

export default function TvCard({ show }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: IMAGE_BASE_URL + show.poster_path }}
        style={styles.image}
      />
      <Text numberOfLines={1} style={styles.title}>
        {show.name}
      </Text>
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
