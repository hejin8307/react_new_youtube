import {Outlet} from 'react-router-dom';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <>
      <Searchbar />
      <Outlet />
    </>
  );
}

export default App;
