import React from 'react';
import AddComment from './AddComment';
import ShowComments from './ShowComments';

const Comments = ({ comments, setComments, review_id }) => {
  return (
    <div>
      Comments
      <ShowComments
        comments={comments}
        setComments={setComments}
        review_id={review_id}
      />
      <AddComment review_id={review_id} />
    </div>
  );
};

export default Comments;
