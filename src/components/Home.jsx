import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeImageWrapper = styled.div`
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1561892699-a132d015e9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80');
  background-size: cover;
  height: 80vh;
  background-position: left bottom;
`;

const HomeContentWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
`;

const HomeH1 = styled.h1`
  font-size: 4rem;
  margin: 0;
`;
const HomeText = styled.p`
  margin-bottom: 70px;
  width: 60%;
`;
const HomeLink = styled(Link)`
  background-color: white;
  border: none;
  padding: 10px 70px;
  text-decoration: none;
  color: black;
`;

const Home = () => {
  return (
    <HomeImageWrapper>
      <HomeContentWrapper>
        <HomeH1>NC Game Reviews</HomeH1>
        <HomeText>
          Reviews of the hottest board games out there, put through their paces
          by experts to help you decide what to play next. Check it out!
        </HomeText>
        <HomeLink to='/reviews'>Browse Reviews</HomeLink>
      </HomeContentWrapper>
    </HomeImageWrapper>
  );
};

export default Home;
