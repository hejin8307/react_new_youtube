import React, {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useYoutubeApi} from '../context/YoutubeApiContext';
import he from 'he';
import {formatAgo} from '../util/date';

const Comments = ({id}) => {
  const {youtube} = useYoutubeApi();

  const {
    isLoading,
    error,
    data: commentThreads,
  } = useQuery(['commentThreads', id], () => youtube.commentThreads(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {commentThreads && (
        <ul className="my-4">
          {commentThreads.map((comment) => (
            <div className="flex my-2">
              <img
                className="w-10 h-10 rounded-full"
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt={comment.snippet.topLevelComment.snippet.authorDisplayName}
              />
              <div className="pl-3">
                <div className="flex items-center">
                  <p>
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  </p>
                  <p className="pl-2 text-hashtagGrey text-sm">
                    {formatAgo(
                      comment.snippet.topLevelComment.snippet.publishedAt
                    )}
                  </p>
                </div>
                <p key={comment.snippet.topLevelComment.id}>
                  {he.decode(
                    comment.snippet.topLevelComment.snippet.textOriginal
                  )}
                </p>
              </div>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Comments;
