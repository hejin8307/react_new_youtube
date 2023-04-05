import {createContext, useContext} from 'react';
import Youtube from '../service/youtube';
import FakeYoutube from '../service/fakeYoutubeClient';
import FakeYoutubeClient from '../service/fakeYoutubeClient';
import YoutubeClient from '../service/youtubeClient';

const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({children}) {
  return (
    <YoutubeApiContext.Provider value={{youtube}}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
