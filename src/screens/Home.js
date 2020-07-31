import React from 'react';

import { observer } from 'mobx-react';

import { useStores } from '../hooks';
import { useAuth0 } from '@auth0/auth0-react';

import InfiniteScroll from 'react-infinite-scroller';

import { Typography, Layout, Alert } from 'antd';

import { Banner, MoviesGrid, LoginButton } from '../components/ui';
import { Container, Section } from '../components/layout';

import { STATE_TYPES } from '../constants';

// import homeBannerBg from '../static/images/home-banner-bg.jpg';
import homeBannerBg from '../static/images/home-banner-bg-2.jpg';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const { moviesStore } = useStores();
  const { isAuthenticated } = useAuth0();

  const latestFavorites = React.useMemo(() => {
    return moviesStore.favoritesPreviews.slice(0, 4);
  }, [moviesStore.favoritesPreviews]);

  const handleNewPageLoad = (page) => {
    moviesStore.searchMoviesNextPage({ page });
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
            <>
              <InfiniteScroll
                pageStart={1}
                loadMore={handleNewPageLoad}
                hasMore={moviesStore.hasNextPage}
                loader={<p key={0}>loading...</p>}
              >
                <MoviesGrid movies={moviesStore.searchResults} />
              </InfiniteScroll>
            </>
          ) : (
            <>
              <Section>
                <Title>Your latest findings</Title>
                {moviesStore.latestFindings.length > 0 ? (
                  <MoviesGrid movies={moviesStore.latestFindingsPreviews} />
                ) : (
                  <>
                    <Paragraph>
                      {isAuthenticated
                        ? 'Your search history is empty. Start searching for your favorite movies and review your latest findings later on.'
                        : 'You are not logged in. In order to keep track of your findings, you need to log in first.'}
                    </Paragraph>
                    <LoginButton />
                  </>
                )}
              </Section>
              <Section>
                <Title>Your latest favorites</Title>
                {latestFavorites.length > 0 ? (
                  <MoviesGrid movies={latestFavorites} />
                ) : (
                  <>
                    <Paragraph>
                      {isAuthenticated
                        ? 'Your favorites list is empty. Start adding movies to your favorites list and review your latest findings later on.'
                        : 'You are not logged in. In order to save movies to favorites, you need to log in first.'}
                    </Paragraph>
                    <LoginButton />
                  </>
                )}
              </Section>
            </>
          )}
        </Container>
      </Content>
    </>
  );
};

export default observer(Home);
