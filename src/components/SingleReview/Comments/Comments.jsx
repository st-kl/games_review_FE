import React from 'react';
import AddComment from './AddComment';
import ShowComments from './ShowComments';
import styled from 'styled-components';
import Expandable from '../../Expandable';

const CommentSectionWrapper = styled.div`
  border-top: 1px solid #acacac;
`;

const Comments = ({ comments, setComments, review_id, setCommentChange }) => {
  return (
    <Expandable>
      <CommentSectionWrapper>
        <AddComment review_id={review_id} setCommentChange={setCommentChange} />
        <ShowComments
          comments={comments}
          setComments={setComments}
          review_id={review_id}
        />
      </CommentSectionWrapper>
    </Expandable>
  );
};

export default Comments;
