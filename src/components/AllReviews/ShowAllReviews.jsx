import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowAllReviewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  overflow: scroll;
`;

const ReviewWrapper = styled.div`
  background-color: #ece8e8;
  margin: 15px;
  width: 275px;
  transition: transform 0.3s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }
`;

const ReviewTitle = styled(Link)`
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
`;

const ReviewInfoWrapper = styled.div`
  margin: 10px;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ReviewCategory = styled.div`
  &:last-child {
    margin-left: auto;
  }
  border: grey 1px solid;
  border-radius: 20px;
  padding: 0 5px;
`;
const ReviewDate = styled.div`
  margin: 5px 0 40px;
`;

const ReviewVotes = styled.div`
  padding-right: 10px;
  &:before {
    font-family: 'Font Awesome 5 Free';
    content: '\f004';
    padding-right: 3px;
    vertical-align: middle;
    font-weight: 900;
  }
`;
const ReviewComments = styled.div`
  padding-right: 3px;
  &:before {
    font-family: 'Font Awesome 5 Free';
    content: '\f075';
    padding-right: 3px;
    vertical-align: middle;
    font-weight: 900;
  }
`;
const VotesCommentsCategoryWrapper = styled.div`
  display: flex;
  border-top: grey 1px solid;
  padding-top: 10px;
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
              <ReviewInfoWrapper>
                <ReviewTitle to={`/review/${review.review_id}`}>
                  {review.title}
                </ReviewTitle>
                <ReviewDate>{review.created_at.slice(0, 10)}</ReviewDate>
                <VotesCommentsCategoryWrapper>
                  <ReviewVotes>{review.votes}</ReviewVotes>
                  <ReviewComments>{review.comment_count}</ReviewComments>
                  <ReviewCategory>{review.category}</ReviewCategory>
                </VotesCommentsCategoryWrapper>
              </ReviewInfoWrapper>
            </ReviewWrapper>
          );
        })}
      </ShowAllReviewsWrapper>
    );
  }
};

export default ShowAllReviews;
