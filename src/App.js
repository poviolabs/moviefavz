import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './router';

import { observer } from 'mobx-react';
import { useStores } from './hooks';

import styled from 'styled-components';

import { Layout } from 'antd';

import { Header, Footer } from './components/ui';

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const App = () => {
  const { moviesStore } = useStores();

  React.useEffect(() => {
    /**
     * Later change this to initialize when
     * user logs in and user-id is available
     */
    moviesStore.initializeFromStorage();
    // eslint-disable-next-line
  }, []);
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
