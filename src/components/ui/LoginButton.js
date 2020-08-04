import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { useAppAuth } from '../../hooks';

import { Button, Divider } from 'antd';

const LoginButton = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { login } = useAppAuth();

  if (isAuthenticated || isLoading) {
    return null;
  }
  return (
    <>
      <Divider />
      <Button type="primary" size="large" onClick={login}>
        Log in
      </Button>
    </>
  );
};

export default LoginButton;
