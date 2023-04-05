import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

// SearhBar에서 비디오를 검색했을 때 page
const Videos = ({youtube}) => {
  const {keyword} = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return axios
      .get(`/data/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
  });
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   youtube.popular().then((videos) => {
  //     setVideos(videos);
  //   });
  // }, [youtube]);

  return (
    <>
      {keyword ? `🔍${keyword}` : '🔥'}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong ❌</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
