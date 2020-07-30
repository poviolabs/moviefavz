import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Card } from 'antd';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 100%;

  .ant-card-cover {
    height: 260px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

const MovieCard = ({ Title, Poster, Type, Year, imdbID, onPress }) => {
  return (
    <StyledCard
      hoverable
      cover={<img alt={Title} src={Poster} />}
      onClick={() => (onPress ? onPress(imdbID) : null)}
    >
      <Meta title={Title} description={`${Year} • ${Type}`} />
    </StyledCard>
  );
};

MovieCard.propTypes = {
  Title: PropTypes.string,
  Poster: PropTypes.string,
  Type: PropTypes.string,
  Year: PropTypes.string,
  imdbID: PropTypes.string,
  onPress: PropTypes.func,
};

export default MovieCard;
