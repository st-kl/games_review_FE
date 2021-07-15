import React, { useState } from 'react';
import { patchReviewById } from '../../utils/api';

const ShowSingleReview = ({ review, hasError, isLoading }) => {
  const [voteChange, setVoteChange] = useState(0);

  const incVotes = (reviewId) => {
    setVoteChange((currVoteChange) => currVoteChange + 1);
    patchReviewById(reviewId).catch((err) => {
      setVoteChange(0);
    });
  };

  return (
    <div>
      {review.title} Votes: {review.votes + voteChange}
      <button
        disabled={voteChange > 0}
        key={`incVoteButton${review.review_id}`}
        onClick={() => {
          incVotes(review.review_id);
        }}
      >
        Like
      </button>
    </div>
  );
};

export default ShowSingleReview;
