import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: green;
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Link to='/reviews'>Reviews</Link>
      </Nav>
    </div>
  );
};

export default Navbar;
