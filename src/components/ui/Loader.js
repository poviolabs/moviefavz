import React from 'react';

import styled from 'styled-components';

import { Spin } from 'antd';

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <Spin size="large" />
    </StyledLoaderContainer>
  );
};

export default Loader;
