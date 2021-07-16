import React, { useState } from 'react';
import { patchReviewById } from '../../utils/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
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

const ReviewCategory = styled.div`
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

const LikeButton = styled.button`
  margin-left: 15px;
  padding: 5px 30px;
`;

const Author = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Designer = styled.div`
  display: inline-block;
  font-size: 1rem;
`;

const ShowSingleReview = ({ review, hasError, isLoading }) => {
  const [voteChange, setVoteChange] = useState(0);

  const incVotes = (reviewId) => {
    setVoteChange((currVoteChange) => currVoteChange + 1);
    patchReviewById(reviewId).catch((err) => {
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
              <ReviewComments>{review.comment_count}</ReviewComments>
              <ReviewCategory>{review.category}</ReviewCategory>
            </VotesCommentsCategoryWrapper>
          </ReviewInfoWrapper>
          <LikeButton
            disabled={voteChange > 0}
            key={`incVoteButton${review.review_id}`}
            onClick={() => {
              incVotes(review.review_id);
            }}
          >
            Like
          </LikeButton>
        </ReviewWrapper>
      </ShowAllReviewsWrapper>
    </div>
  );
};

export default ShowSingleReview;
