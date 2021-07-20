import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/User';
import { getCommentsByReview, postComment } from '../../../utils/api';
import styled from 'styled-components';

const NewCommentWrapper = styled.div`
  margin: 40px 0 20px 0;
`;
const CommentInput = styled.input`
  margin-right: 20px;
  width: 400px;
  border: none;
  border-bottom: black solid 1px;
  padding: 10px;
`;
const PostCommentButton = styled.button`
  border: none;
  background-color: #e4e4e4;
  padding: 5px 10px;
`;
const NewCommentForm = styled.form``;

const AddComment = ({ review_id, setCommentChange }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    username: user.username,
    body: '',
  });

  const updateNumOfComments = (reviewId) => {
    setCommentChange((currNumOfComments) => currNumOfComments + 1);
    getCommentsByReview(reviewId).catch((err) => {
      setCommentChange(0);
    });
  };

  return (
    <NewCommentWrapper>
      <NewCommentForm
        name='newComment'
        onSubmit={(event) => {
          event.preventDefault();
          postComment(review_id, newComment.username, newComment.body);
          setNewComment((currComment) => {
            const newComment = { ...currComment };
            newComment.body = '';
            return newComment;
          });
          updateNumOfComments(review_id);
        }}
      >
        <CommentInput
          type='text'
          id='newCommentBody'
          placeholder='please enter a new comment here'
          name='newComment'
          value={newComment.body}
          onChange={(event) => {
            setNewComment((currComment) => {
              const newComment = { ...currComment };
              newComment.body = event.target.value;
              return newComment;
            });
          }}
        />
        <PostCommentButton disabled={!newComment.body}>
          Comment
        </PostCommentButton>
      </NewCommentForm>
    </NewCommentWrapper>
  );
};

export default AddComment;
