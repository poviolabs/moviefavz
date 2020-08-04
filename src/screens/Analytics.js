import React from 'react';

import { observer } from 'mobx-react';

import { Layout, Typography } from 'antd';

import { Container, Section } from '../components/layout';
import { Emoji } from '../components/typography';

const { Content } = Layout;
const { Title } = Typography;

const Favorites = () => {
  return (
    <Content>
      <Container>
        <Section>
          <Title level={1}>
            Your App Usage <Emoji emoji="📈" label="analytics" />
          </Title>
        </Section>
      </Container>
    </Content>
  );
};

export default observer(Favorites);
