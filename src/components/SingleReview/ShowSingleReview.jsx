import React from 'react';

const ShowSingleReview = ({ review }) => {
  console.log(review);
  return <div>{review.title}</div>;
};

export default ShowSingleReview;
