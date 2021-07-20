import React, { useEffect } from 'react';
import { getCommentsByReview } from '../../../utils/api';

import styled from 'styled-components';
import dateFormat from 'dateformat';

const CommentSection = styled.div`
  height: 40vh;
  overflow: scroll;
`;
const CommentWrapper = styled.div`
  margin: 15px 10px 15px 0;
  border: 1px solid #acacac;
  padding: 10px;
  border-radius: 5px;
`;
const CommentAuthor = styled.div`
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 10px;
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
  });

  return (
    <CommentSection>
      {comments
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((comment) => {
          return (
            <CommentWrapper key={comment.comment_id}>
              <AuthorAndDateWrapper>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentDate>
                  • {dateFormat(comment.created_at, 'mmmm d, yyyy')}
                </CommentDate>
              </AuthorAndDateWrapper>
              <CommentBody>{comment.body}</CommentBody>
            </CommentWrapper>
          );
        })}
    </CommentSection>
  );
};

export default ShowComments;
