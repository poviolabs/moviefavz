import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../layout';

import MovieCard from './MovieCard';

const MoviesGrid = ({ movies, onMoviePress }) => {
  return (
    <Grid minColWidth={{ sm: '160px', lg: '215px' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} onPress={onMoviePress} {...movie} />
      ))}
    </Grid>
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
