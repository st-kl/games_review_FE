import React, { useEffect } from 'react';
import { getCommentsByReview } from '../../../utils/api';

import styled from 'styled-components';

const CommentSection = styled.div`
  height: 40vh;
  overflow: scroll;
`;
const CommentWrapper = styled.div`
  margin: 15px 0 15px 0;
`;
const CommentAuthor = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;
const CommentDate = styled.div`
  color: #6b6b6b;
`;
const CommentBody = styled.div``;
const AuthorAndDateWrapper = styled.div`
  display: flex;
`;

const ShowComments = ({ comments, setComments, review_id }) => {
  // query comments for each review
  useEffect(() => {
    getCommentsByReview(review_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
      })
      .catch((err) => {});
  }, []);

  return (
    <CommentSection>
      {comments
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((comment) => {
          return (
            <CommentWrapper key={comment.comment_id}>
              <AuthorAndDateWrapper>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentDate>{comment.created_at.slice(0, 10)}</CommentDate>
              </AuthorAndDateWrapper>
              <CommentBody>{comment.body}</CommentBody>
            </CommentWrapper>
          );
        })}
    </CommentSection>
  );
};

export default ShowComments;
