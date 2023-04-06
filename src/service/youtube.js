class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
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
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({...item, id: item.id.videoId})));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }

  async channel(videos) {
    const videoChannel = [];
    for (let i = 0; i < videos.length; i++) {
      const response = this.apiClient
        .channels({
          params: {
            part: 'snippet',
            id: videos[i].snippet.channelId,
          },
        })
        .then((res) => res.data.items[0])
        .then((item) => (videos[i].channel = item));
      videoChannel.push(response);
    }
    return videoChannel;
  }
}

export default Youtube;
