
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import { FavouritesProvider } from './src/context/FavouritesContext';
import { WatchlistProvider } from './src/context/WatchlistContext';


export default function App() {
  return (
    <FavouritesProvider>
      <WatchlistProvider>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </WatchlistProvider>
    </FavouritesProvider>
  );
}
