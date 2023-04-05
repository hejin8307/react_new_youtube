import {Outlet} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Searchbar from './components/Searchbar';
import {YoutubeApiProvider} from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Searchbar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
