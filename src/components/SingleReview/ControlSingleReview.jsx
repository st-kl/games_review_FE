import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ControlSingleReview = ({ review_id }) => {
  const history = useHistory();

  const ControlSingleReviewWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    text-align: center;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    padding-top: 20px;
    padding-bottom: 20px;
    grid-column-gap: 40px;
    padding-left: 10%;
    padding-right: 10%;
  `;

  const ControlReviewButton = styled.button`
    background-color: white;
    border: none;
    padding: 10px 70px;
    text-decoration: none;
    color: black;
  `;

  return (
    <ControlSingleReviewWrapper>
      <ControlReviewButton
        onClick={() => {
          history.push(`/review/${review_id > 1 ? review_id - 1 : review_id}`);
        }}
      >
        {`<<< previous`}
      </ControlReviewButton>
      <ControlReviewButton
        onClick={() => {
          history.push(`/reviews`);
        }}
      >
        All Reviews
      </ControlReviewButton>
      <ControlReviewButton
        onClick={() => {
          history.push(`/review/${parseInt(review_id) + 1}`);
        }}
      >
        {`<<< next`}
      </ControlReviewButton>
    </ControlSingleReviewWrapper>
  );
};

export default ControlSingleReview;
