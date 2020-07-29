import React from 'react';

import MoviesStore from './MoviesStore';

const storesContext = React.createContext({
  moviesStore: new MoviesStore(),
});

export default storesContext;
