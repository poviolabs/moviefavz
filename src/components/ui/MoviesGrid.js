import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';
import { useStores } from '../../hooks';

import { Grid } from '../layout';

import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

import { STATE_TYPES } from '../../constants';

const MoviesGrid = ({ movies = [] }) => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const { moviesStore } = useStores();

  const handleMoviePress = (movieId) => {
    setSelectedMovie(movieId);
    moviesStore.addToLatestFidings({ id: movieId });
  };

  const handleFavoritesPress = (movieId) => {
    moviesStore.toggleFavoriteMovie({ id: movieId });
  };

  React.useEffect(() => {
    if (
      selectedMovie &&
      !Object.prototype.hasOwnProperty.call(
        moviesStore.singleMoviesById,
        selectedMovie
      )
    ) {
      moviesStore.fetchMovieById({ id: selectedMovie });
    }
  }, [selectedMovie, moviesStore]);

  return (
    <>
      <Grid minColWidth={{ sm: '160px', lg: '215px' }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            onPress={handleMoviePress}
            onFavoritePress={handleFavoritesPress}
            favorited={moviesStore.favorites.includes(movie.imdbID)}
            {...movie}
          />
        ))}
      </Grid>
      <MovieModal
        loading={moviesStore.state === STATE_TYPES.pending}
        visible={!!selectedMovie}
        movie={moviesStore.singleMoviesById[selectedMovie]}
        favorited={moviesStore.favorites.includes(selectedMovie)}
        onClose={() => setSelectedMovie(null)}
        onFavoritesPress={handleFavoritesPress}
      />
    </>
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
};

export default observer(MoviesGrid);
