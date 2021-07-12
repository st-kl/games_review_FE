import React, { useEffect, useState } from 'react';
import { getReviews } from '../../utils/api';
import ControlAllReviews from './ControlAllReviews';
import ShowAllReviews from './ShowAllReviews';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  // query reviews
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <div>
      AllReviews
      <ControlAllReviews />
      <ShowAllReviews reviews={reviews} />
    </div>
  );
};

export default AllReviews;
