import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { Layout, Space } from 'antd';

const StyledHeader = styled(Layout.Header)`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <StyledLink to="/" exact>
          <strong>MovieFavz App</strong>
        </StyledLink>
      </div>
      <nav className="navigation">
        <Space size="large">
          <StyledLink to="/your-favz" exact>
            Your Favz
          </StyledLink>
          <span>Logout</span>
        </Space>
      </nav>
    </StyledHeader>
  );
};

export default Header;
