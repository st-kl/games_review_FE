import React from 'react';

const ShowAllReviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return <li key={review.review_id}>{review.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShowAllReviews;
