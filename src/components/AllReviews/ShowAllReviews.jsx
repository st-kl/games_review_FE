import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowAllReviewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
`;

const ReviewWrapper = styled.div`
  position: relative;
  margin: 10px;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  width: 350px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const ReviewTitle = styled.div`
  font-size: 1.2rem;
  width: 80%;
  margin: auto;
`;

const ReviewImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 10px;
`;
const ReviewCategory = styled.div``;
const ReviewDate = styled.div``;
const ReviewAuthor = styled.div``;
const ReviewVotes = styled.div``;
const ReviewComments = styled.div``;

const ShowAllReviews = ({ reviews, isLoading, hasError }) => {
  if (hasError) {
    return <p>This path does not exist.</p>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <ShowAllReviewsWrapper>
        {reviews.map((review) => {
          return (
            <ReviewWrapper key={review.review_id}>
              <ReviewTitle>
                <Link to={`/review/${review.review_id}`}>{review.title}</Link>
              </ReviewTitle>
              <ReviewImage
                src={review.review_img_url}
                alt={review.title}
              ></ReviewImage>
              <ReviewCategory>{review.category}</ReviewCategory>
              <ReviewDate>{review.created_at}</ReviewDate>
              <ReviewAuthor>{review.owner}</ReviewAuthor>
              <ReviewVotes>{review.votes}</ReviewVotes>
              <ReviewComments>{review.comment_count}</ReviewComments>
            </ReviewWrapper>
          );
        })}
      </ShowAllReviewsWrapper>
    );
  }
};

export default ShowAllReviews;
