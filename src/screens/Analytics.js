import React from 'react';

import { observer } from 'mobx-react';

import { Layout, Typography } from 'antd';

import { Container, Section } from '../components/layout';
import { Emoji } from '../components/typography';
import { UsageChart } from '../components/ui';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Favorites = () => {
  return (
    <Content>
      <Container>
        <Section>
          <Title level={1}>Your App Usage</Title>
          <Paragraph>
            Don&apos;t worry, we do not collect any of your data, this is for
            your eyes only <Emoji emoji="👀" label="pointing finger" />
          </Paragraph>
        </Section>
        <UsageChart />
      </Container>
    </Content>
  );
};

export default observer(Favorites);
