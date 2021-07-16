import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  margin-bottom: 20px;
`;

const NavLogo = styled.img`
  height: 50px;
`;

const Navbar = () => {
  return (
    <div>
      <Header>
        <Link to='/'>
          <NavLogo src='https://leeds.tech/wp-content/uploads/2017/04/logo-northcoders-1024x227.png'></NavLogo>
        </Link>
      </Header>
    </div>
  );
};

export default Navbar;
