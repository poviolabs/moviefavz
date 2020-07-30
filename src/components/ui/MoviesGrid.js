import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import MovieCard from './MovieCard';

const MoviesGrid = ({ movies, onMoviePress }) => {
  return (
    <Row
      gutter={[
        { xs: 16, sm: 16 },
        { xs: 12, sm: 24 },
      ]}
      type="flex"
    >
      {movies.map((movie) => (
        <Col
          key={movie.imdbID}
          xs={{ span: 12 }}
          sm={{ span: 8 }}
          lg={{ span: 6 }}
        >
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
