import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import he from 'he';
import {ViewCount, SubscriberConverter} from '../util/converter';
import ChannelThumbnails from '../components/ChannelThumbnails';
import {formatAgo} from '../util/date';

// Video를 선택했을 때 page
const VideoDetail = () => {
  const {
    state: {video, channel},
  } = useLocation();

  const [isOpened, setIsOpened] = useState(false);

  const {title, channelId, channelTitle, description, publishedAt, tags} =
    video.snippet;

  if (!video) {
    return null;
  }

  if (!channel) {
    return null;
  }

  return (
    <section className="flex flex-col lg:flex-row py-4">
      <article className="basis-4/6 pl-8">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="450vh"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">{he.decode(title)}</h2>
          {/* <ChannelThumbnails id={channelId} name={channelTitle} /> */}
          <div className="flex mt-2 mb-4 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={channel.snippet.thumbnails.default.url}
              alt={channelTitle}
            />
            <div className="ml-2">
              <p className="font-medium">{channelTitle}</p>
              <p className="text-xs">
                {SubscriberConverter(channel.statistics.subscriberCount)}
              </p>
            </div>
          </div>
          <div className="bg-mediumGrey rounded-lg py-2 px-3">
            <div className="flex">
              <p className="font-medium text-sm">
                {`${ViewCount(channel.statistics.viewCount)} ${formatAgo(
                  publishedAt
                )} `}
              </p>
              <p className="text-hashtagGrey pl-2">
                {tags && tags.map((tag) => `#${tag} `).slice(0, 3)}
              </p>
            </div>
            <pre
              className={`${
                isOpened ? '' : 'line-clamp-4'
              } whitespace-pre-wrap `}
            >
              {description}
            </pre>
            <button onClick={() => setIsOpened(!isOpened)}>
              {isOpened ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
};

export default VideoDetail;
