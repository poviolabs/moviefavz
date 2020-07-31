import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const mobileStyles = css`
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${({ minColWidth }) => minColWidth.sm}, 1fr)
    );
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      ${({ minColWidth }) =>
        typeof minColWidth === 'object' ? minColWidth.lg : minColWidth},
      1fr
    )
  );
  grid-gap: ${({ gutter }) => gutter};
  margin: ${({ outerSpacing }) => outerSpacing} 0;

  ${({ minColWidth }) => typeof minColWidth === 'object' && mobileStyles};
`;

const Grid = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};

Grid.propTypes = {
  children: PropTypes.node,
  minColWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  gutter: PropTypes.string,
  outerSpacing: PropTypes.string,
};

Grid.defaultProps = {
  minColWidth: '256px',
  gutter: '1rem',
  outerSpacing: '1rem',
};

export default Grid;
