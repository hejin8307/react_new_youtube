import axios from 'axios';

class FakeYoutubeClient {
  async search(keyword) {
    return axios.get('/data/search.json');
  }

  async videos(keyword) {
    return axios.get('/data/popular.json');
  }
}

export default FakeYoutubeClient;
