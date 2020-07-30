import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './router';

import styled from 'styled-components';

import { Layout } from 'antd';

import { Header, Footer } from './components/ui';

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const App = () => {
  return (
    <StyledLayout>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </StyledLayout>
  );
};

export default App;
