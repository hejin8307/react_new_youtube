import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {useYoutubeApi} from '../context/YoutubeApiContext';

const ChannelInfo = ({id, name}) => {
  const {youtube} = useYoutubeApi();

  const {
    isLoading,
    error,
    data: channel,
  } = useQuery(['channel', id], () => youtube.channelDetail(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className="flex mt-2 mb-4 items-center">
      {channel && (
        <img
          className="w-10 h-10 rounded-full"
          src={channel.snippet.thumbnails.default.url}
          alt={name}
        />
      )}
      <p className="font-medium ml-2"> {name} </p>
    </div>
  );
};

export default ChannelInfo;
