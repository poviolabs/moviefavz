import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'antd';

import styled from 'styled-components';

const StyledText = styled(Typography.Paragraph)`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MovieRating = ({ source, value }) => {
  return (
    <StyledText>
      <strong>{source}:</strong> {value}
    </StyledText>
  );
};

MovieRating.propTypes = {
  source: PropTypes.string,
  value: PropTypes.string,
};

export default MovieRating;
