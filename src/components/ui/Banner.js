import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';

import styled from 'styled-components';
import { transparentize } from 'polished';

import { useStores } from '../../hooks';

import { Typography, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Container } from '../layout';
import { Emoji } from '../typography';

const { Title } = Typography;
const { Search } = Input;

const StyledBanner = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 50vw
    ${({ theme }) => transparentize(0.6, theme.colors.dark)};
  min-height: ${({ theme }) => theme.layouts.bannerHeight};
  margin-bottom: 45px;

  .banner-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${({ theme }) => theme.layouts.bannerHeight};
  }
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const StyledSearch = styled(Search)`
  button {
    width: 100%;
  }
`;

const Banner = ({ image }) => {
  const { moviesStore } = useStores();
  const handleSearch = (query) => {
    if (!query) {
      return;
    }
    moviesStore.searchMovies({ query });
  };
  return (
    <StyledBanner {...{ image }}>
      <Container className="banner-container">
        <StyledTitle>
          <Emoji label="popcorn" emoji="🍿" /> Looking for a movie?
        </StyledTitle>
        <StyledTitle level={3}>
          Find and save your favorite movie with MovieFavz.
        </StyledTitle>
        <StyledSearch
          onSearch={(text) => handleSearch(text)}
          size="large"
          enterButton="Search"
          placeholder="Your favorite movie title..."
          prefix={<SearchOutlined />}
        />
      </Container>
    </StyledBanner>
  );
};

Banner.propTypes = {
  image: PropTypes.string,
};

export default observer(Banner);
