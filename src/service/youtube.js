class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelDetail(id) {
    return this.apiClient
      .channels({
        params: {
          part: 'snippet, statistics',
          id,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({...item, id: item.id.videoId}))
      );
  }

  async getVideoInfo(id) {
    return this.apiClient
      .videos({
        params: {
          part: 'statistics',
          id,
        },
      })
      .then((res) => res.data.items[0].statistics);
  }

  async commentThreads(id) {
    return this.apiClient
      .commentThreads({
        params: {
          part: 'snippet',
          videoId: id,
        },
      })
      .then((res) => res.data.items);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({...item, id: item.id.videoId}))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet, statistics',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}

export default Youtube;
