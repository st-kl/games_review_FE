import React, { useEffect, useState } from 'react';
import ControlSingleReview from './ControlSingleReview';
import ShowSingleReview from './ShowSingleReview';
import Comments from './Comments/Comments';
import { getReviewById } from '../../utils/api';
import { useParams } from 'react-router-dom';

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  // query review
  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, []);

  return (
    <div>
      <ControlSingleReview />
      <ShowSingleReview review={review} />
      <Comments />
    </div>
  );
};

export default SingleReview;
