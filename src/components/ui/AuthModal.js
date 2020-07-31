import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Modal, Typography, Button, Divider } from 'antd';

import { Emoji } from '../typography';
import { AuthGraphic } from '../graphics';

const { Title, Paragraph } = Typography;

const StyledGraphicContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  svg {
    width: 75%;
    height: auto;
  }
`;

const AuthModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      title="You are not logged in"
      visible={visible}
      onCancel={onCancel}
      onOk={onConfirm}
      footer={null}
    >
      <StyledGraphicContainer>
        <AuthGraphic />
      </StyledGraphicContainer>
      <Title level={3}>
        Hey there, you are not logged in <Emoji emoji="👀" label="eyes" />
      </Title>
      <Paragraph>
        In order to add movies to favorites and view your recent searches, you
        need to authenticate. Click the Login button bellow, to start saving
        your movies.
      </Paragraph>
      <Divider />
      <Button type="primary" block size="large" onClick={onConfirm}>
        Log In
      </Button>
    </Modal>
  );
};

AuthModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

export default AuthModal;
