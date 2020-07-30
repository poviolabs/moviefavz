import React from 'react';

import { observer } from 'mobx-react';

import { useStores } from '../hooks';

import { Typography, Layout, Alert, Button, Space } from 'antd';

import { Banner, MoviesGrid } from '../components/ui';
import { Container, Section } from '../components/layout';

import { STATE_TYPES } from '../constants';

// import homeBannerBg from '../static/images/home-banner-bg.jpg';
import homeBannerBg from '../static/images/home-banner-bg-2.jpg';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const { moviesStore } = useStores();

  const searchInProgress = React.useMemo(() => {
    return moviesStore.searching === STATE_TYPES.pending;
  }, [moviesStore.searching]);

  const handleMoviePress = (movieId) => {
    console.log(movieId);
  };

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
            <Space direction="vertical" size="large">
              <MoviesGrid
                movies={moviesStore.searchResults}
                onMoviePress={handleMoviePress}
              />
              {moviesStore.searchNextPage !== null && (
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
            </Space>
          ) : (
            <>
              <Section>
                <Title>Your latest findings</Title>
                <Paragraph>
                  Your search history is empty. Start searching for your
                  favorite movies and review your latest findings later on.
                </Paragraph>
              </Section>
              <Section>
                <Title>Your latest favorites</Title>
                <Paragraph>
                  Your favorites list is empty. Start adding movies to your
                  favorites list and review your latest findings later on.
                </Paragraph>
              </Section>
            </>
          )}
        </Container>
      </Content>
    </>
  );
};

export default observer(Home);
