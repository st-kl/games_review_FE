import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import dateFormat from 'dateformat';

const ShowAllReviewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  overflow: scroll;
  height: 75vh;
  scrollbar-width: none;
`;

const ReviewWrapper = styled.div`
  background-color: #ece8e8;
  margin: 15px;
  width: 275px;
  height: 365px;
  transition: transform 0.3s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }
`;

const ReviewTitle = styled(Link)`
  color: black;
  font-size: 1.2rem;
  /* text-decoration: none; */
`;

const ReviewInfoWrapper = styled.div`
  position: relative;
  margin: 0 15px 10px;
  height: 150px;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ReviewCategory = styled(Link)`
  &:last-child {
    margin-left: auto;
  }
  border: grey 1px solid;
  border-radius: 20px;
  padding: 0 5px;
  text-decoration: none;
  color: black;
`;
const ReviewDate = styled.div`
  margin: 5px 0 40px;
`;

const ReviewVotes = styled.div`
  padding: 0 10px 0 3px;
`;

const ReviewComments = styled.div`
  padding: 0 10px 0 3px;
`;
const VotesCommentsCategoryWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  border-top: grey 1px solid;
  padding-top: 10px;
  width: 100%;
  align-items: center;
`;

const ShowAllReviews = ({ reviews, isLoading, hasError }) => {
  if (hasError) {
    return <p>This path does not exist.</p>;
  } else if (isLoading) {
    return <p>Loading Reviews...</p>;
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
                <ReviewDate>
                  {dateFormat(review.created_at, 'mmmm d, yyyy')}
                </ReviewDate>
                <VotesCommentsCategoryWrapper>
                  <AiFillLike />
                  <ReviewVotes>{review.votes}</ReviewVotes>
                  <FaComment />
                  <ReviewComments>{review.comment_count}</ReviewComments>
                  <ReviewCategory to={`/reviews/${review.category}`}>
                    {review.category}
                  </ReviewCategory>
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
