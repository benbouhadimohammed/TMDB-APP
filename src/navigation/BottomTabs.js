import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieScreen from '../screens/MovieScreen';
import TvScreen from '../screens/TvScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import WatchlistScreen from '../screens/WatchlistScreen';
import SearchScreen from '../screens/SearchScreen';



const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MovieScreen} />
      <Tab.Screen name="TV Shows" component={TvScreen} />
      <Tab.Screen name="Favorites" component={FavouritesScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />

    </Tab.Navigator>
  );
}
