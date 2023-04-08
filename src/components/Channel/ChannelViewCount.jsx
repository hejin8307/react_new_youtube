import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {useYoutubeApi} from '../../context/YoutubeApiContext';

const ChannelViewCount = ({id}) => {
  const {youtube} = useYoutubeApi();

  const {
    isLoading,
    error,
    data: channel,
  } = useQuery(['channel', id], () => youtube.channelDetail(id), {
    staleTime: 1000 * 60 * 5,
  });

  return <p>{channel.statistics.viewCount}</p>;
};

export default ChannelViewCount;
