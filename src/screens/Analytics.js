import React from 'react';

import { observer } from 'mobx-react';
import { useStores } from '../hooks';

import { Layout, Typography } from 'antd';
import { useTheme } from 'styled-components';

import { Container, Section } from '../components/layout';
import { Emoji } from '../components/typography';
import { UsageChart, HomeButton } from '../components/ui';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Favorites = () => {
  const { analyticsStore } = useStores();
  const { colors } = useTheme();

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
        {analyticsStore.hasStatistics ? (
          <UsageChart
            data={analyticsStore.groupedStatistics}
            dataKeys={['favsValue', 'searchValue']}
            labels={['Number of added favz', 'Performed searches']}
            colors={[colors.primary, colors.secondary]}
          />
        ) : (
          <Section>
            <Paragraph>
              Looks like you don&apos;t have any favorited movies or searches
              just yet <Emoji emoji="🤷‍♂️" label="man shrugging" />. Return to the
              app home and find some movies you like.
            </Paragraph>
            <HomeButton />
          </Section>
        )}
      </Container>
    </Content>
  );
};

export default observer(Favorites);
