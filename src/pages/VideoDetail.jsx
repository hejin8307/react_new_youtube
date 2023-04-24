import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useDarkMode} from '../context/DarkModeContext';
import he from 'he';
import ChannelThumbnails from '../components/ChannelThumbnails';
import RelatedVideos from '../components/RelatedVideos';
import {Converter} from '../util/converter';
import {formatAgo} from '../util/date';
import Comments from '../components/Comments';

// Video를 선택했을 때 page
const VideoDetail = () => {
  const {
    state: {video, channel, videoInfo},
  } = useLocation();

  const {title, channelId, channelTitle, description, publishedAt, tags} =
    video.snippet;

  const {darkMode} = useDarkMode();
  const [isOpened, setIsOpened] = useState(false);

  if (!video || !channel || !videoInfo) {
    return null;
  }

  const type = 'large';

  return (
    <section className="flex flex-col lg:flex-row py-4">
      <article className="basis-4/6 pl-8">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="550vh"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
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
              {`${Converter(channel.statistics.subscriberCount)} subscribers`}
            </p>
          </div>
        </div>
        <div
          className={`rounded-lg my-2 py-2 px-3 ${
            darkMode ? 'bg-dark_darkGrey' : 'bg-mediumGrey'
          }`}
        >
          <div className="flex">
            <p className="font-medium text-sm">
              {`${Converter(videoInfo.viewCount)} views`} &nbsp;
            </p>
            <p className="font-medium text-sm">{formatAgo(publishedAt)}</p>
            <p className="text-hashtagGrey pl-2">
              {tags && tags.map((tag) => `#${tag} `).slice(0, 3)}
            </p>
          </div>
          <pre
            className={`${
              isOpened ? '' : 'line-clamp-4'
            } whitespace-pre-wrap text-sm`}
          >
            {description}
          </pre>
          <button onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? 'Show less' : 'Show more'}
          </button>
        </div>
        <Comments id={video.id} />
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
};

export default VideoDetail;
