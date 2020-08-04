import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import { useAuth0 } from '@auth0/auth0-react';

import { Grid } from '../layout';

import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import AuthModal from './AuthModal';

import { STATE_TYPES } from '../../constants';

const MoviesGrid = ({ movies = [] }) => {
  const [authModalActive, setAuthModalActive] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const { moviesStore } = useStores();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleMoviePress = (movieId) => {
    setSelectedMovie(movieId);
    if (isAuthenticated) {
      moviesStore.addToLatestFidings({ id: movieId, user: user.sub });
    }
  };

  const handleFavoritesPress = (movieId) => {
    if (!isAuthenticated) {
      setAuthModalActive(true);
      return;
    }
    moviesStore.toggleFavoriteMovie({ id: movieId, user: user.sub });
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
      <AuthModal
        visible={authModalActive}
        onCancel={() => setAuthModalActive(false)}
        onConfirm={loginWithRedirect}
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
