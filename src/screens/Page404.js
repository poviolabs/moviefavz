import React from 'react';

import { useHistory } from 'react-router-dom';

import { Typography, Button, Layout, Space } from 'antd';

import { Container, Section } from '../components/layout';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Page404 = () => {
  const history = useHistory();

  return (
    <Content>
      <Container>
        <Section>
          <Space direction="vertical" size="large">
            <div className="content-group">
              <Title>Page not found</Title>
              <Paragraph>
                Your search history is empty. Start searching for your favorite
                movies and review your latest findings later on.
              </Paragraph>
            </div>
            <Button
              onClick={() => history.push('/')}
              type="primary"
              size="large"
            >
              Back to home page
            </Button>
          </Space>
        </Section>
      </Container>
    </Content>
  );
};

export default Page404;
