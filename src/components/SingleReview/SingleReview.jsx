import React, { useEffect, useState } from 'react';
import ControlSingleReview from './ControlSingleReview';
import ShowSingleReview from './ShowSingleReview';
import Comments from './Comments/Comments';
import { getReviewById } from '../../utils/api';
import { useParams } from 'react-router-dom';

const SingleReview = ({ comments, setComments }) => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  // query review
  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, [review_id]);

  return (
    <div>
      <ControlSingleReview />
      <ShowSingleReview review={review} />
      <Comments
        comments={comments}
        setComments={setComments}
        review_id={review_id}
      />
    </div>
  );
};

export default SingleReview;
