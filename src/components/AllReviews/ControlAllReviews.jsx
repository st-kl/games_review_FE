import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/api';
import { Link, useHistory } from 'react-router-dom';

const ControlAllReviews = ({ setReviews }) => {
  const [categories, setCategories] = useState([]);
  let history = useHistory();

  // query categories
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      ControlAllReviews
      {/* <Link to={`/reviews`}>All</Link>
      {categories.map((category) => {
        return (
          <Link key={`${category.slug}Link`} to={`/reviews/${category.slug}`}>
            {category.slug}
          </Link>
        );
      })} */}
      <select name='' id=''>
        <option
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
    </div>
  );
};

export default ControlAllReviews;
