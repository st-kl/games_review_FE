import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
  margin: 10px;
  text-align: center;
  padding: 20px;
  border-radius: 3px;
  width: 330px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const ReviewTitle = styled.div`
  font-size: 1.2rem;
  width: 80%;
  margin: auto;
  text-decoration: none;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 2px;
  object-fit: cover;
`;

const ReviewCategory = styled.div`
  &:before {
    content: '🏷️ ';
  }
`;
const ReviewDate = styled.div`
  &:before {
    content: '📅 ';
  }
`;
const ReviewAuthor = styled.div`
  &:before {
    content: '👤 ';
  }
`;
const ReviewVotes = styled.div`
  font-weight: bold;
  padding-right: 3px;
`;
const ReviewComments = styled.div`
  font-weight: bold;
  padding-right: 3px;
`;
const VotesAndCommentsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ReviewText = styled.div`
  margin-right: 20px;
`;

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
              <ReviewImage
                src={review.review_img_url}
                alt={review.title}
              ></ReviewImage>
              <ReviewTitle>
                <Link to={`/review/${review.review_id}`}>{review.title}</Link>
              </ReviewTitle>
              <ReviewCategory>{review.category}</ReviewCategory>
              <ReviewDate>{review.created_at.slice(0, 10)}</ReviewDate>
              <ReviewAuthor>{review.owner}</ReviewAuthor>
              <VotesAndCommentsWrapper>
                <ReviewVotes>{review.votes}</ReviewVotes>
                <ReviewText>Upvotes</ReviewText>
                <ReviewComments>{review.comment_count}</ReviewComments>
                <ReviewText>Comments</ReviewText>
              </VotesAndCommentsWrapper>
            </ReviewWrapper>
          );
        })}
      </ShowAllReviewsWrapper>
    );
  }
};

export default ShowAllReviews;
