import React from 'react';

import moviesStore from './MoviesStore';
import analyticsStore from './AnalyticsStore';

const storesContext = React.createContext({
  moviesStore,
  analyticsStore,
});

export default storesContext;
