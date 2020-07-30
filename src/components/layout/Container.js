import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
