import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Home, Favorites, Page404, Analytics } from '../screens';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        {/**
         * App home screen
         */}
        <Route path="/" exact component={Home} />
        {/**
         * Favorited movies screen
         */}
        <Route path="/your-favz" exact component={Favorites} />
        {/**
         * Analytics charts
         */}
        <Route path="/your-app-usage" exact component={Analytics} />
        {/**
         * Page not found screen
         */}
        <Route path="*" component={Page404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
