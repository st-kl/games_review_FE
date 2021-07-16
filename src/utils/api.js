import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://be-nc-games-sk.herokuapp.com/api',
});

// reviews
export const getReviews = async (category, sort_by, order, page, limit) => {
  const { data } = await gamesApi.get('/reviews', {
    params: {
      category,
      sort_by,
      order,
      page,
      limit,
    },
  });
  return data;
};

export const getReviewById = async (reviewId) => {
  const { data } = await gamesApi.get(`/reviews/${reviewId}`);
  return data.reviews[0];
};

export const patchReviewById = async (reviewId) => {
  const { data } = await gamesApi.patch(`/reviews/${reviewId}`, {
    inc_votes: 1,
  });
};

// comments
export const getCommentsByReview = async (reviewId) => {
  const { data } = await gamesApi.get(
    `/reviews/${reviewId}/comments?limit=1000`
  );
  return data.comments;
};

export const postComment = async (reviewId, username, body) => {
  const { data } = await gamesApi.post(`/reviews/${reviewId}/comments`, {
    username,
    body,
  });
};

// categories
export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};
