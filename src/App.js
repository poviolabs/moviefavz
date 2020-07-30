import React from 'react';

import styled from 'styled-components';

import { Layout, Space } from 'antd';

import { Home } from './screens';

const { Header, Footer } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.clouds};
  margin-top: 45px;
`;

const App = () => {
  return (
    <StyledLayout>
      <StyledHeader>
        <div className="logo">MovieFavz App</div>
        <nav className="navigation">
          <Space size="large">
            <span>Your Favz</span>
            <span>Logout</span>
          </Space>
        </nav>
      </StyledHeader>
      <Home />
      <StyledFooter>Povio Labs © 2020</StyledFooter>
    </StyledLayout>
  );
};

export default App;
