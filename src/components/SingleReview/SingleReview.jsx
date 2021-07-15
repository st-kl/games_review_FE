import React, { useEffect, useState } from 'react';
import ControlSingleReview from './ControlSingleReview';
import ShowSingleReview from './ShowSingleReview';
import Comments from './Comments/Comments';
import { getReviewById } from '../../utils/api';
import { useParams } from 'react-router-dom';

const SingleReview = ({ comments, setComments, numOfRevs }) => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // query review
  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
    getReviewById(review_id)
      .then((reviewFromApi) => {
        setReview(reviewFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
      });
  }, [review_id]);

  return (
    <div>
      <ControlSingleReview review_id={review_id} numOfRevs={numOfRevs} />
      <ShowSingleReview
        review={review}
        hasError={hasError}
        isLoading={isLoading}
      />
      <Comments
        comments={comments}
        setComments={setComments}
        review_id={review_id}
      />
    </div>
  );
};

export default SingleReview;
