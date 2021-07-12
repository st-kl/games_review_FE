import React from 'react';
import AddComment from './AddComment';
import ShowComments from './ShowComments';

const Comments = () => {
  return (
    <div>
      Comments
      <ShowComments />
      <AddComment />
    </div>
  );
};

export default Comments;
