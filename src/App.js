import {Outlet} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Searchbar from './components/Searchbar';
import {YoutubeApiProvider} from './context/YoutubeApiContext';
import {DarkModeProvider, useDarkMode} from './context/DarkModeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <Searchbar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </DarkModeProvider>
  );
}

export default App;
