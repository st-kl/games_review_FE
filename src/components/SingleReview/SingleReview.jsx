import React, { useEffect, useState } from 'react';
import ControlSingleReview from './ControlSingleReview';
import ShowSingleReview from './ShowSingleReview';
import Comments from './Comments/Comments';
import { getReviewById } from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const SingleReviewWrapper = styled.div``;

const SingleReview = ({ comments, setComments, numOfRevs }) => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [commentChange, setCommentChange] = useState(0);

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

  if (hasError) {
    return (
      <SingleReviewWrapper>
        <ControlSingleReview review_id={review_id} numOfRevs={numOfRevs} />
        <p>
          This review ID does not exist. Back to{' '}
          <Link to='/reviews'>ALL REVIEWS</Link>
        </p>
      </SingleReviewWrapper>
    );
  } else if (isLoading) {
    return (
      <SingleReviewWrapper>
        <ControlSingleReview review_id={review_id} numOfRevs={numOfRevs} />
        <p>Loading Review...</p>
      </SingleReviewWrapper>
    );
  } else {
    return (
      <SingleReviewWrapper>
        <ControlSingleReview review_id={review_id} numOfRevs={numOfRevs} />
        <ShowSingleReview
          review={review}
          hasError={hasError}
          isLoading={isLoading}
          setComments={setComments}
          commentChange={commentChange}
        />
        <Comments
          comments={comments}
          setComments={setComments}
          review_id={review_id}
          setCommentChange={setCommentChange}
        />
      </SingleReviewWrapper>
    );
  }
};

export default SingleReview;
