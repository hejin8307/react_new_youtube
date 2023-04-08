import React from 'react';
import {useNavigate} from 'react-router-dom';
import {formatAgo} from '../util/date';
import he from 'he';
import ChannelThumbnails from './ChannelThumbnails';
import ChannelViewCount from './Channel/ChannelViewCount';

const VideoCard = ({video, type}) => {
  const {title, thumbnails, channelId, channelTitle, publishedAt} =
    video.snippet;

  const navigate = useNavigate();

  const isList = type === 'list';

  return (
    <li
      className={`${isList ? 'flex gap-1 pt-2' : ''} cursor-pointer`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, {state: {video}});
      }}
    >
      <img
        className={`${isList ? 'w-60 mr-2' : 'w-full'} rounded-lg`}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex items-start pt-2">
        {!isList && (
          <ChannelThumbnails id={channelId} name={channelTitle} type="grid" />
        )}
        <div className="pl-2">
          <p className="font-semibold line-clamp-2">{he.decode(title)}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          {/* <ChannelViewCount id={channelId} /> */}
          <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
