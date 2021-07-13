import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../utils/api';
import ControlAllReviews from './ControlAllReviews';
import ShowAllReviews from './ShowAllReviews';

const AllReviews = ({ comments }) => {
  const [reviews, setReviews] = useState([]);
  const { category, sort_by, order, title, page, limit } = useParams();

  // query reviews
  useEffect(() => {
    getReviews(category, sort_by, order, title, page, limit).then(
      (reviewsFromApi) => {
        setReviews(reviewsFromApi);
      }
    );
  }, [category, sort_by, order, title, page, limit]);

  return (
    <div>
      AllReviews
      <ControlAllReviews setReviews={setReviews} />
      <ShowAllReviews reviews={reviews} />
    </div>
  );
};

export default AllReviews;
