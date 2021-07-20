import React, { useState } from 'react';
import styled from 'styled-components';

const ExpandableWrapper = styled.div`
  width: 55%;
  margin: auto;
`;
const ShowCommentsButton = styled.button`
  background-color: white;
  margin-bottom: 20px;
  border: solid #acacac 1px;
  padding: 10px 70px;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };
  return (
    <ExpandableWrapper>
      <ShowCommentsButton onClick={toggleIsOpen}>
        {isOpen ? 'Hide Comments' : 'Show Comments'}
      </ShowCommentsButton>
      {isOpen ? children : null}
    </ExpandableWrapper>
  );
};
export default Expandable;
