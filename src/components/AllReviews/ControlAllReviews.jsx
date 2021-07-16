import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/api';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ControlAllReviewsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  /* text-align: center; */
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding-top: 20px;
  padding-bottom: 20px;
  grid-column-gap: 40px;
  padding-left: 10px;
  background-color: white;
`;

const Select = styled.select`
  background-color: none;
  border-top: 1px solid #d4d3d3;
  border-right: none;
  border-bottom: 1px solid #d4d3d3;
  border-left: none;
  padding: 3px;
  color: #696969;
`;
const Option = styled.option`
  border: none;
`;
const Label = styled.label`
  margin-bottom: 10px;
`;

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
    <ControlAllReviewsWrapper>
      <Label htmlFor='selectCategory'>Category</Label>
      <Label htmlFor='selectSortBy'>Sort By</Label>
      <Label htmlFor='selectOrder'>Order</Label>
      <Label htmlFor='selectLimit'>Items per Page</Label>
      <Label htmlFor='selectPages'>Page</Label>
      <Select name='selectCategory'>
        <Option
          key='allCategoriesOption'
          onClick={() => {
            history.push(`/reviews`);
          }}
        >
          All
        </Option>
        {categories.map((category) => {
          return (
            <Option
              key={`${category.slug}Option`}
              onClick={() => {
                history.push(`/reviews/${category.slug}`);
              }}
            >
              {category.slug}
            </Option>
          );
        })}
      </Select>
      <Select name='selectSortBy'>
        <Option
          key='sortByNothingsOption'
          onClick={() => {
            setSortBy();
          }}
        ></Option>
        <Option
          key='sortByCommentsOption'
          onClick={() => {
            setSortBy('votes');
          }}
        >
          Votes
        </Option>
        <Option
          key='sortByCreatedAtOption'
          onClick={() => {
            setSortBy('created_at');
          }}
        >
          Date
        </Option>
        <Option
          key='sortByReviewIdOption'
          onClick={() => {
            setSortBy('review_id');
          }}
        >
          Review ID
        </Option>
      </Select>
      <Select name='selectOrder'>
        <Option
          key='orderDesOption'
          onClick={() => {
            setOrder('desc');
          }}
        >
          Descending
        </Option>
        <Option
          key='orderAscOption'
          onClick={() => {
            setOrder('asc');
          }}
        >
          Ascending
        </Option>
      </Select>
      <Select name='selectLimit'>
        <Option
          key='limitDefaultOption'
          onClick={() => {
            setLimit(10);
          }}
        ></Option>
        <Option
          key='limitAllOption'
          onClick={() => {
            setLimit(numOfRevs);
          }}
        >
          All
        </Option>
        <Option
          key='limit5Option'
          onClick={() => {
            setLimit(5);
          }}
        >
          5
        </Option>
        <Option
          key='limit10Option'
          onClick={() => {
            setLimit(10);
          }}
        >
          10
        </Option>
        <Option
          key='limit20Option'
          onClick={() => {
            setLimit(20);
          }}
        >
          20
        </Option>
      </Select>
      <Select name='selectPages'>
        {pages.map((page) => {
          return (
            <Option
              key={`page${page}option`}
              onClick={() => {
                setPage(page);
              }}
            >
              {page}
            </Option>
          );
        })}
      </Select>
    </ControlAllReviewsWrapper>
  );
};

export default ControlAllReviews;
