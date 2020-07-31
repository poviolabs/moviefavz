import 'mobx-react/batchingForReactDom';
import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import './index.less';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Auth0Provider
    domain="moviefavz.eu.auth0.com"
    clientId="gs3QJm3RUynqfPJ0f7qH7NPYHkZkq2Qs"
    redirectUri={window.location.origin}
  >
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
