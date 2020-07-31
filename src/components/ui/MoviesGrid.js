import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../layout';

import MovieCard from './MovieCard';

const MoviesGrid = ({ movies, favorites, onFavoritesPress, onMoviePress }) => {
  return (
    <Grid minColWidth={{ sm: '160px', lg: '215px' }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          onPress={onMoviePress}
          onFavoritePress={onFavoritesPress}
          favorited={favorites.includes(movie.imdbID)}
          {...movie}
        />
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
  onFavoritesPress: PropTypes.func,
  favorites: PropTypes.arrayOf(PropTypes.string),
};

export default MoviesGrid;
