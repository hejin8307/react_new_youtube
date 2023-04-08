import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import ChannelThumbnails from '../components/ChannelThumbnails';

// Video를 선택했을 때 page
const VideoDetail = () => {
  const {
    state: {video},
  } = useLocation();

  const [isOpened, setIsOpened] = useState(false);

  const {title, channelId, channelTitle, description} = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row py-4">
      <article className="basis-4/6 pl-8">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="450vh"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">{title}</h2>
          <ChannelThumbnails id={channelId} name={channelTitle} />
          <div className="bg-mediumGrey rounded-lg">
            <pre
              className={`${
                isOpened ? '' : 'line-clamp-3'
              } whitespace-pre-wrap pt-4 px-3`}
            >
              {description}
            </pre>
            <button
              className="py-4 px-3"
              onClick={() => setIsOpened(!isOpened)}
            >
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
