import React from 'react';

import { observer } from 'mobx-react';

import { useStores } from '../hooks';

import { Typography, Layout } from 'antd';

import { Banner, MoviesGrid } from '../components/ui';
import { Container, Section } from '../components/layout';

// import homeBannerBg from '../static/images/home-banner-bg.jpg';
import homeBannerBg from '../static/images/home-banner-bg-2.jpg';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const { moviesStore } = useStores();
  const handleMoviePress = (movieId) => {
    console.log(movieId);
  };
  return (
    <>
      <Banner image={homeBannerBg} />
      <Content>
        <Container>
          {moviesStore.hasSearchResults ? (
            <MoviesGrid
              movies={moviesStore.searchResults}
              onMoviePress={handleMoviePress}
            />
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
