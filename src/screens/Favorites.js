import React from 'react';

import { observer } from 'mobx-react';
import { useStores } from '../hooks';
import { useAuth0 } from '@auth0/auth0-react';

import { saveAs } from 'file-saver';

import { Layout, Typography, Row, Col, Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { Container, Section } from '../components/layout';
import { Emoji } from '../components/typography';
import { MoviesGrid, LoginButton, HomeButton } from '../components/ui';
import { STATE_TYPES } from '../constants';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Favorites = () => {
  const { moviesStore } = useStores();
  const { isAuthenticated, isLoading, user } = useAuth0();

  const hasFavorites = React.useMemo(() => {
    return moviesStore.favoritesPreviews.length > 0;
  }, [moviesStore.favoritesPreviews]);

  const stateLoading = React.useMemo(() => {
    return moviesStore.state === STATE_TYPES.pending || isLoading;
  }, [moviesStore.state, isLoading]);

  const handleFavzExport = () => {
    const data = moviesStore.favorites.reduce(
      (arr, id) => [...arr, moviesStore.singleMoviesById[id]],
      []
    );

    const fileName = `${
      user.given_name ? user.given_name : user.nickname
    }_Movie_Favz.json`;

    const fileToSave = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });

    saveAs(fileToSave, fileName);
  };

  return (
    <Content>
      <Container>
        <Section>
          <Row align="middle">
            <Col flex="auto">
              <Title level={1}>Your Favz</Title>
              {hasFavorites || stateLoading ? (
                <Paragraph>
                  Here are your favorited movies. It&apos;s always smart to keep
                  track of things you like{' '}
                  <Emoji emoji="👇" label="pointing finger" />
                </Paragraph>
              ) : isAuthenticated ? (
                <>
                  <Paragraph>
                    Looks like you don&apos;t have any favorited movies just yet{' '}
                    <Emoji emoji="🤷‍♂️" label="man shrugging" />. Return to the
                    app home and find some movies you like.
                  </Paragraph>
                  {moviesStore.state === STATE_TYPES.done && <HomeButton />}
                </>
              ) : (
                <>
                  <Paragraph>
                    In order to add movies to favorites and view your recent
                    searches, you need to authenticate. Click the Login button
                    bellow, to start saving your movies.
                  </Paragraph>
                  <LoginButton />
                </>
              )}
            </Col>
            <Col flex="200px">
              {isAuthenticated && hasFavorites && (
                <Button
                  block
                  size="large"
                  type="primary"
                  onClick={handleFavzExport}
                >
                  Export your Favz <ExportOutlined />
                </Button>
              )}
            </Col>
          </Row>
        </Section>
        {hasFavorites && <MoviesGrid movies={moviesStore.favoritesPreviews} />}
      </Container>
    </Content>
  );
};

export default observer(Favorites);
