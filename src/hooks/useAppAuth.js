import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { ENVIRONMENT } from '../constants';

const useAppAuth = () => {
  const { loginWithRedirect, logout: logoutAuth0 } = useAuth0();

  const login = React.useCallback(() => {
    return loginWithRedirect({ redirectUri: ENVIRONMENT.appBaseUrl });
  }, [loginWithRedirect]);

  const logout = React.useCallback(() => {
    return logoutAuth0({ returnTo: ENVIRONMENT.appBaseUrl });
  }, [logoutAuth0]);

  return {
    login,
    logout,
  };
};

export default useAppAuth;
