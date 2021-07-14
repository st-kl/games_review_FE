import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllReviews = ({ reviews}) => {
  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/review/${review.review_id}`}>
                {review.title} {review.review_id}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowAllReviews;
