import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useYoutubeApi} from '../context/YoutubeApiContext';
import {useQuery} from '@tanstack/react-query';
import {formatAgo} from '../util/date';
import he from 'he';
import ChannelThumbnails from './ChannelThumbnails';
import {Converter} from '../util/converter';

const VideoCard = ({video, type}) => {
  const {title, thumbnails, channelId, channelTitle, publishedAt} =
    video.snippet;

  const {youtube} = useYoutubeApi();
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: channel,
  } = useQuery(['channel', channelId], () => youtube.channelDetail(channelId), {
    staleTime: 1000 * 60 * 5,
  });

  const {data: videoInfo} = useQuery(
    ['videoInfo', video.id],
    () => youtube.getVideoInfo(video.id),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  const isList = type === 'list';

  if (!video || !channel || !videoInfo) {
    return null;
  }

  return (
    <li
      className={`${isList ? 'flex gap-1 pb-2' : ''} cursor-pointer`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, {
          state: {video, channel, videoInfo},
        });
      }}
    >
      <img
        className={`${isList ? 'w-40 mr-2' : 'w-full'} rounded-lg`}
        src={video.snippet.thumbnails.medium.url}
        alt={title}
      />
      <div className={`${isList ? '' : 'pt-2'} flex items-start`}>
        {/* {!isList && (
          <ChannelThumbnails id={channelId} name={channelTitle} type="grid" />
        )} */}
        {!isList && (
          <img
            className="w-10 h-10 rounded-full"
            src={channel.snippet.thumbnails.default.url}
            alt={channelTitle}
          />
        )}
        <div className="pl-2">
          <p className="font-semibold line-clamp-2">{he.decode(title)}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">{`${Converter(
            videoInfo.viewCount
          )} • ${formatAgo(publishedAt)}`}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
