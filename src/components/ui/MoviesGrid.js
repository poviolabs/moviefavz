import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import MovieCard from './MovieCard';

const MoviesGrid = ({ movies, onMoviePress }) => {
  return (
    <Row gutter={[24, 16]} type="flex">
      {movies.map((movie) => (
        <Col key={movie.imdbID} span={6}>
          <MovieCard {...movie} onPress={onMoviePress} />
        </Col>
      ))}
    </Row>
  );
};

MoviesGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Poster: PropTypes.string,
      Type: PropTypes.string,
      Year: PropTypes.string,
      imdbID: PropTypes.string,
    })
  ),
  onMoviePress: PropTypes.func,
};

export default MoviesGrid;
