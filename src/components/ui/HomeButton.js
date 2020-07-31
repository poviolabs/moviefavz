import React from 'react';

import { useHistory } from 'react-router-dom';

import { Divider, Button } from 'antd';

const HomeButton = () => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <>
      <Divider />
      <Button size="large" type="primary" onClick={handleClick}>
        Back to home
      </Button>
    </>
  );
};

export default HomeButton;
