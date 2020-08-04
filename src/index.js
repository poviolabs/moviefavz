import 'mobx-react/batchingForReactDom';
import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import './index.less';

import { ENVIRONMENT } from './constants';

import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="moviefavz.eu.auth0.com"
    clientId="gs3QJm3RUynqfPJ0f7qH7NPYHkZkq2Qs" // This is a code example application - in a production application this type of information would not be commited into the repository
    redirectUri={ENVIRONMENT.appBaseUrl}
  >
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
