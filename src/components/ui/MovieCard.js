import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Card } from 'antd';

import MovieImage from './MovieImage';

const { Meta } = Card;

const StyledCard = styled(Card)`
  flex: 1;

  .ant-card-cover {
    height: 260px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .ant-card-meta-description {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const MovieCard = ({ Title, Poster, Type, Year, imdbID, onPress }) => {
  return (
    <StyledCard
      hoverable
      cover={<MovieImage title={Title} poster={Poster} />}
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