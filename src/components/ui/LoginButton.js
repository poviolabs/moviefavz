import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { Button, Divider } from 'antd';

const LoginButton = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  if (isAuthenticated || isLoading) {
    return null;
  }
  return (
    <>
      <Divider />
      <Button type="primary" size="large" onClick={loginWithRedirect}>
        Log in
      </Button>
    </>
  );
};

export default LoginButton;
