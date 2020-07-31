import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './router';

import { observer } from 'mobx-react';
import { useStores } from './hooks';
import { useAuth0 } from '@auth0/auth0-react';

import styled from 'styled-components';

import { Layout } from 'antd';

import { Header, Footer } from './components/ui';

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const App = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const { moviesStore } = useStores();

  React.useEffect(() => {
    /**
     * Initialize localy stored data when
     * user logs in and user.sub is available
     */
    if (isAuthenticated && !isLoading) {
      moviesStore.initializeFromStorage({ user: user.sub });
    }
    // eslint-disable-next-line
  }, [isAuthenticated, isLoading, user]);

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

export default observer(App);
