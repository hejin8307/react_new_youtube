import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {useYoutubeApi} from '../context/YoutubeApiContext';

const ChannelThumbnails = ({id, name, type}) => {
  const {youtube} = useYoutubeApi();

  const isGrid = type === 'grid';

  const {
    isLoading,
    error,
    data: channel,
  } = useQuery(['channel', id], () => youtube.channelDetail(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="flex mt-2 mb-4 items-center">
      <div className="w-10 h-10">
        {channel && (
          <img
            className="rounded-full"
            src={channel.snippet.thumbnails.default.url}
            alt={name}
          />
        )}
      </div>
      <p className={`${isGrid && 'hidden'} font-medium ml-2`}>{name}</p>{' '}
    </div>
  );
};

export default ChannelThumbnails;
