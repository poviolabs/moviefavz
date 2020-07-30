import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 45px 0;
`;

const Section = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
