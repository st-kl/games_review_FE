import React, { useState } from 'react';
import { patchReviewById } from '../../utils/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

import dateFormat from 'dateformat';

const ShowAllReviewsWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  overflow: scroll;
  height: 75vh;
  scrollbar-width: none; */
  width: 60%;
  margin: auto;
  justify-content: center;
`;

const ReviewBody = styled.div``;

const ReviewWrapper = styled.div`
  background-color: #ece8e8;
  margin: 15px;
  padding: 20px;
`;

const ReviewTitle = styled(Link)`
  color: black;
  font-size: 1.4rem;
  text-decoration: none;
`;

const ReviewInfoWrapper = styled.div`
  position: relative;
  margin: 0 15px 10px;
  padding-bottom: 50px;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ReviewCategory = styled(Link)`
  text-decoration: none;
  color: black;
  &:last-child {
    margin-left: auto;
  }
  border: grey 1px solid;
  border-radius: 20px;
  padding: 0 5px;
`;
const ReviewDate = styled.div`
  margin: 5px 0 5px;
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

const VoteButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`;

const Author = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Designer = styled.div`
  display: inline-block;
  font-size: 1rem;
`;

const ShowSingleReview = ({ review, commentChange }) => {
  const [voteChange, setVoteChange] = useState(0);

  const changeVotes = (reviewId, vote) => {
    setVoteChange((currVoteChange) => currVoteChange + vote);
    patchReviewById(reviewId, vote).catch((err) => {
      setVoteChange(0);
    });
  };

  return (
    <div>
      <ShowAllReviewsWrapper>
        <ReviewWrapper key={review.review_id}>
          <ReviewImage
            src={review.review_img_url}
            alt={review.title}
          ></ReviewImage>
          <ReviewInfoWrapper>
            <ReviewTitle to={`/review/${review.review_id}`}>
              {review.title} <Designer>by {review.designer}</Designer>
            </ReviewTitle>
            <ReviewDate>
              {dateFormat(review.created_at, 'mmmm d, yyyy')}
            </ReviewDate>
            <Author>@{review.owner}</Author>

            <ReviewBody>{review.review_body} </ReviewBody>
            <VotesCommentsCategoryWrapper>
              <AiFillLike />
              <ReviewVotes>{review.votes + voteChange}</ReviewVotes>
              <FaComment />
              <ReviewComments>
                {review.comment_count + commentChange}
              </ReviewComments>
              <ReviewCategory to={`/reviews/${review.category}`}>
                {review.category}
              </ReviewCategory>
            </VotesCommentsCategoryWrapper>
          </ReviewInfoWrapper>
          <VoteButton
            disabled={voteChange > 0}
            key={`incVoteButton${review.review_id}`}
            onClick={() => {
              changeVotes(review.review_id, 1);
            }}
          >
            <ImArrowUp />
          </VoteButton>
          <VoteButton
            disabled={voteChange < 0}
            key={`decVoteButton${review.review_id}`}
            onClick={() => {
              changeVotes(review.review_id, -1);
            }}
          >
            <ImArrowDown />
          </VoteButton>
        </ReviewWrapper>
      </ShowAllReviewsWrapper>
    </div>
  );
};

export default ShowSingleReview;
