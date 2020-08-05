import React from 'react';

import { observer } from 'mobx-react';
import { useStores } from '../hooks';

import { Layout, Typography } from 'antd';

import { Container, Section } from '../components/layout';
import { Emoji } from '../components/typography';
import { UsageChart, HomeButton } from '../components/ui';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Favorites = () => {
  const { analyticsStore } = useStores();

  return (
    <Content>
      <Container>
        <Section>
          <Title level={1}>Your App Usage</Title>
          <Paragraph>
            Don&apos;t worry, we <strong>do not collect</strong> any of your
            data, this is for your eyes only{' '}
            <Emoji emoji="👀" label="pointing finger" />
          </Paragraph>
        </Section>
        {analyticsStore.hasFavoritesStatistic ? (
          <UsageChart data={analyticsStore.favoritesStatistic} />
        ) : (
          <Section>
            <Paragraph>
              Looks like you don&apos;t have any favorited movies just yet{' '}
              <Emoji emoji="🤷‍♂️" label="man shrugging" />. Return to the app home
              and find some movies you like.
            </Paragraph>
            <HomeButton />
          </Section>
        )}
      </Container>
    </Content>
  );
};

export default observer(Favorites);
