import React from 'react';

import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import styled from 'styled-components';

import { Layout, Space, Button } from 'antd';

import UserDropdown from './UserDropdown';

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
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  return (
    <StyledHeader>
      <div className="logo">
        <StyledLink to="/" exact>
          <strong>MovieFavz</strong>
        </StyledLink>
      </div>
      {!isLoading && (
        <nav className="navigation">
          <Space size="large">
            {isAuthenticated ? (
              <>
                <StyledLink to="/your-favz" exact>
                  Your Favz
                </StyledLink>
                <UserDropdown user={user} onLogout={logout} />
              </>
            ) : (
              <Button size="middle" danger onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
          </Space>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Header;
