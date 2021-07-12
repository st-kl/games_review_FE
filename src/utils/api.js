import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://be-nc-games-sk.herokuapp.com/api',
});

// reviews
export const getReviews = async () => {
  const { data } = await gamesApi.get('/reviews');
  return data.reviews;
};

export const getReviewById = async (reviewId) => {
  const { data } = await gamesApi.get(`/reviews/${reviewId}`);
  return data.reviews[0];
};
