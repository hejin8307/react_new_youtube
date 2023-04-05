class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async popular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 24,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
