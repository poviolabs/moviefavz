import React from 'react';

import { observer } from 'mobx-react';

import { useStores } from '../hooks';

import { Typography, Layout, Alert, Button } from 'antd';

import { Banner, MoviesGrid, MovieModal } from '../components/ui';
import { Container, Section } from '../components/layout';

import { STATE_TYPES } from '../constants';

// import homeBannerBg from '../static/images/home-banner-bg.jpg';
import homeBannerBg from '../static/images/home-banner-bg-2.jpg';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const { moviesStore } = useStores();

  const searchInProgress = React.useMemo(() => {
    return moviesStore.searching === STATE_TYPES.pending;
  }, [moviesStore.searching]);

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
      <Banner image={homeBannerBg} />
      <Content>
        <Container>
          {moviesStore.searching === STATE_TYPES.error && (
            <Alert
              message={`Search error: ${moviesStore.error}`}
              description="Try searching with different search query. Make sure that search query is at least 3 characters long."
              type="error"
              closable
              onClose={moviesStore.removeErrors}
            />
          )}
          {moviesStore.hasSearchResults ? (
            <>
              <MoviesGrid
                movies={moviesStore.searchResults}
                favorites={moviesStore.favorites}
                onMoviePress={handleMoviePress}
                onFavoritesPress={handleFavoritesPress}
              />
              {moviesStore.hasNextPage && (
                <Button
                  size="large"
                  type="primary"
                  loading={searchInProgress}
                  onClick={moviesStore.searchMoviesNextPage}
                  block
                >
                  {searchInProgress ? 'Loading' : 'Load more results'}
                </Button>
              )}
            </>
          ) : (
            <>
              <Section>
                <Title>Your latest findings</Title>
                {moviesStore.latestFindings.length > 0 ? (
                  <MoviesGrid
                    movies={moviesStore.latestFindingsPreviews}
                    favorites={moviesStore.favorites}
                    onMoviePress={handleMoviePress}
                    onFavoritesPress={handleFavoritesPress}
                  />
                ) : (
                  <Paragraph>
                    Your search history is empty. Start searching for your
                    favorite movies and review your latest findings later on.
                  </Paragraph>
                )}
              </Section>
              <Section>
                <Title>Your latest favorites</Title>
                {moviesStore.latestFavoritesPreviews.length > 0 ? (
                  <MoviesGrid
                    movies={moviesStore.latestFavoritesPreviews}
                    favorites={moviesStore.favorites}
                    onMoviePress={handleMoviePress}
                    onFavoritesPress={handleFavoritesPress}
                  />
                ) : (
                  <Paragraph>
                    Your favorites list is empty. Start adding movies to your
                    favorites list and review your latest findings later on.
                  </Paragraph>
                )}
              </Section>
            </>
          )}
        </Container>
      </Content>
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

export default observer(Home);
