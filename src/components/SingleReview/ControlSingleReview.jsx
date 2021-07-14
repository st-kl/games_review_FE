import React from 'react';
import { useHistory } from 'react-router-dom';

const ControlSingleReview = ({ review_id }) => {
  const history = useHistory();

  return (
    <div>
      ControlSingleReviews
      <button
        onClick={() => {
          history.push(`/review/${review_id}`);
        }}
      >
        previous
      </button>
    </div>
  );
};

export default ControlSingleReview;
