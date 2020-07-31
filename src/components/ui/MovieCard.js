import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Card } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

import MovieImage from './MovieImage';

const { Meta } = Card;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.light};
  padding: 0.75rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 18px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
`;

const StyledCard = styled(Card)`
  width: 100%;
  position: relative;

  .ant-card-cover {
    height: 260px;

    @media screen and (max-width: 768px) {
      height: 220px;
    }

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

const MovieCard = ({
  Title,
  Poster,
  Type,
  Year,
  imdbID,
  onPress,
  favorited,
  onFavoritePress,
}) => {
  const handleFavoritePress = (e) => {
    e.stopPropagation();
    if (!onFavoritePress) {
      return;
    }
    onFavoritePress(imdbID);
  };

  const handleCardPress = () => {
    if (!onPress) {
      return;
    }
    onPress(imdbID);
  };

  return (
    <StyledCard
      hoverable
      cover={<MovieImage title={Title} poster={Poster} />}
      onClick={handleCardPress}
    >
      <StyledIconContainer onClick={handleFavoritePress}>
        {favorited ? <HeartFilled /> : <HeartOutlined />}
      </StyledIconContainer>
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
  favorited: PropTypes.bool,
  onFavoritePress: PropTypes.func,
};

export default MovieCard;
