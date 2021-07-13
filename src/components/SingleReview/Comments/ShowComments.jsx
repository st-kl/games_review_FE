import React, { useEffect } from 'react';
import { getCommentsByReview } from '../../../utils/api';

const ShowComments = ({ comments, setComments, review_id }) => {
  // query comments for each review
  useEffect(() => {
    getCommentsByReview(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.comment_id}>{comment.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShowComments;
