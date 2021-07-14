import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/api';
import { Link, useHistory } from 'react-router-dom';

const ControlAllReviews = ({
  setSortBy,
  setOrder,
  setPage,
  setLimit,
  reviews,
  limit,
  numOfRevs,
}) => {
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const numOfPages = Math.ceil(numOfRevs / limit);
  const pages = [];

  for (let i = 1; i < numOfPages + 1; i++) {
    pages.push(i);
  }

  // query categories
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      ControlAllReviews
      <select>
        <option
          key='allCategoriesOption'
          onClick={() => {
            history.push(`/reviews`);
          }}
        >
          All
        </option>
        {categories.map((category) => {
          return (
            <option
              key={`${category.slug}Option`}
              onClick={() => {
                history.push(`/reviews/${category.slug}`);
              }}
            >
              {category.slug}
            </option>
          );
        })}
      </select>
      <select>
        <option
          key='sortByCommentsOption'
          onClick={() => {
            setSortBy('votes');
          }}
        >
          # Comments
        </option>
        <option
          key='sortByCreatedAtOption'
          onClick={() => {
            setSortBy('created_at');
          }}
        >
          Created At
        </option>
        <option
          key='sortByReviewIdOption'
          onClick={() => {
            setSortBy('review_id');
          }}
        >
          Review ID
        </option>
      </select>
      <select>
        <option
          key='orderAscOption'
          onClick={() => {
            setOrder('asc');
          }}
        >
          Ascending
        </option>
        <option
          key='orderDesOption'
          onClick={() => {
            setOrder('desc');
          }}
        >
          Descending
        </option>
      </select>
      <select>
        <option
          key='limitAllOption'
          onClick={() => {
            setLimit(numOfRevs);
          }}
        >
          All
        </option>
        <option
          key='limit5Option'
          onClick={() => {
            setLimit(5);
          }}
        >
          5
        </option>
        <option
          key='limit10Option'
          onClick={() => {
            setLimit(10);
          }}
        >
          10
        </option>
        <option
          key='limit20Option'
          onClick={() => {
            setLimit(20);
          }}
        >
          20
        </option>
      </select>
      <select>
        {pages.map((page) => {
          return (
            <option
              key={`page${page}option`}
              onClick={() => {
                setPage(page);
              }}
            >
              {page}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ControlAllReviews;
