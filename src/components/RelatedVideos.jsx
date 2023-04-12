import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {useYoutubeApi} from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

const RelatedVideos = ({id}) => {
  const {youtube} = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul className="px-8 pt-2 lg:pt-0">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
};
export default RelatedVideos;
