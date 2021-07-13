import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/User';
import { postComment } from '../../../utils/api';

const AddComment = ({ review_id }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    username: user.username,
    body: '',
  });

  return (
    <div>
      Add comment{' '}
      <form
        name='newComment'
        onSubmit={(event) => {
          event.preventDefault();
          postComment(review_id, newComment.username, newComment.body);
        }}
      >
        <label htmlFor='newCommentBody'>New Comment Text</label>
        <br />
        <input
          type='text'
          id='newCommentBody'
          name='newComment'
          value={newComment.body}
          onChange={(event) => {
            setNewComment((currComment) => {
              const newComment = { ...currComment };
              newComment.body = event.target.value;
              return newComment;
            });
          }}
        />{' '}
        {!newComment.body && <p>Please enter a comment</p>}
        <br />
        <button disabled={!newComment.body}>Post Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
