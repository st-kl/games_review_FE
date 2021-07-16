import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../utils/api';
import ControlAllReviews from './ControlAllReviews';
import ShowAllReviews from './ShowAllReviews';
import styled from 'styled-components';

const AllReviewsWrapper = styled.div``;

const AllReviews = ({ comments }) => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [numOfRevs, setNumOfRevs] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // query reviews
  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
    getReviews(category, sortBy, order, page, limit)
      .then((reviewsFromApi) => {
        setReviews(reviewsFromApi.reviews);
        setNumOfRevs(reviewsFromApi.total_count);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
      });
  }, [category, sortBy, order, page, limit]);

  console.log(category, sortBy, order, page, limit);

  return (
    <AllReviewsWrapper>
      <ControlAllReviews
        setSortBy={setSortBy}
        setOrder={setOrder}
        setPage={setPage}
        setLimit={setLimit}
        reviews={reviews}
        limit={limit}
        numOfRevs={numOfRevs}
        setNumOfRevs={setNumOfRevs}
      />
      <ShowAllReviews
        reviews={reviews}
        isLoading={isLoading}
        hasError={hasError}
      />
    </AllReviewsWrapper>
  );
};

export default AllReviews;
