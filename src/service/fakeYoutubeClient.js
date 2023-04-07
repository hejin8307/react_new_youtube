import axios from 'axios';

class FakeYoutubeClient {
  async search({params}) {
    return params.relatedToVideoIdo
      ? axios.get('/data/search.json')
      : axios.get('/data/related.json');
  }

  async videos() {
    return axios.get('/data/popular.json');
  }

  async channels() {
    return axios.get('/data/channel.json');
  }
}

export default FakeYoutubeClient;
