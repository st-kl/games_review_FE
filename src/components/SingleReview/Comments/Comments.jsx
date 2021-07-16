import React from 'react';
import AddComment from './AddComment';
import ShowComments from './ShowComments';
import styled from 'styled-components';

const CommentSectionWrapper = styled.div`
  width: 50%;
  margin: 50px auto 0 auto;
  border-top: 1px solid #acacac;
`;

const Comments = ({ comments, setComments, review_id }) => {
  return (
    <CommentSectionWrapper>
      <AddComment review_id={review_id} />
      <ShowComments
        comments={comments}
        setComments={setComments}
        review_id={review_id}
      />
    </CommentSectionWrapper>
  );
};

export default Comments;
