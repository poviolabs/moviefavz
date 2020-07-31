import React from 'react';

import { useHistory } from 'react-router-dom';

import { observer } from 'mobx-react';
import { useStores } from '../hooks';

import { Layout, Typography, Button, Divider } from 'antd';

import { Container, Section } from '../components/layout';
import { Emoji } from '../components/typography';
import { MoviesGrid } from '../components/ui';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Favorites = () => {
  const history = useHistory();
  const { moviesStore } = useStores();

  const hasFavorites = React.useMemo(() => {
    return moviesStore.favoritesPreviews.length > 0;
  }, [moviesStore.favoritesPreviews]);

  return (
    <Content>
      <Container>
        <Section>
          <Title level={1}>Your Favz</Title>
          {hasFavorites ? (
            <Paragraph>
              Here are your favorited movies. It&apos;s always smart to keep
              track of things you like{' '}
              <Emoji emoji="👇" label="pointing finger" />
            </Paragraph>
          ) : (
            <>
              <Paragraph>
                Looks like you don&apos;t have any favorited movies just yet{' '}
                <Emoji emoji="🤷‍♂️" label="man shrugging" />. Return to the app
                home and find some movies you like.
              </Paragraph>
              <Divider />
              <Button
                size="large"
                type="primary"
                onClick={() => history.push('/')}
              >
                Back to home
              </Button>
            </>
          )}
        </Section>
        {hasFavorites && <MoviesGrid movies={moviesStore.favoritesPreviews} />}
      </Container>
    </Content>
  );
};

export default observer(Favorites);
