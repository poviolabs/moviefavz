import React from 'react';

import styled from 'styled-components';

import { Layout } from 'antd';

const StyledFooter = styled(Layout.Footer)`
  text-align: center;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.clouds};
  margin-top: 45px;
`;

const Footer = () => {
  return <StyledFooter>Povio Labs © 2020</StyledFooter>;
};

export default Footer;
