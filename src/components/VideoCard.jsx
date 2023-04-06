import React from 'react';
import {formatAgo} from '../util/date';

const VideoCard = ({video}) => {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  return (
    <li>
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p>채널 썸네일</p>
        <div>
          <p className="font-semibold line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">viewer count</p>
          <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
