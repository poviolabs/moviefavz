import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Home, Page404 } from '../screens';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        {/**
         * App home screen
         */}
        <Route path="/" exact component={Home} />
        {/**
         * Page not found screen
         */}
        <Route path="*" component={Page404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
