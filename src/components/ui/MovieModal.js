import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Skeleton, Modal, Row, Col, Typography, Divider, Button } from 'antd';
import { HeartOutlined, LinkOutlined } from '@ant-design/icons';

import MovieRating from './MovieRating';
import MovieImage from './MovieImage';

const { Title, Paragraph } = Typography;

const StyledPosterImage = styled(MovieImage)`
  object-fit: cover;
  width: 100%;
  height: auto;
  margin-bottom: 24px;
`;

const StyledSmallText = styled(Paragraph)`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MovieModal = ({ visible, loading, movie, onClose }) => {
  return (
    <Modal
      title={movie?.Title}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={720}
    >
      {loading ? (
        <Skeleton paragraph={{ rows: 10 }} active />
      ) : (
        movie && (
          <>
            <Row gutter={16}>
              <Col sm={{ span: 24 }} lg={{ span: 10 }}>
                <StyledPosterImage poster={movie.Poster} title={movie.Title} />
                <Button
                  type="primary"
                  block
                  icon={<HeartOutlined />}
                  size="large"
                  onClick={null}
                >
                  Add to Favorites
                </Button>
                <Button
                  icon={<LinkOutlined />}
                  block
                  size="large"
                  onClick={() =>
                    window.open(
                      `https://www.imdb.com/title/${movie.imdbID}/`,
                      '_blank'
                    )
                  }
                >
                  View on IMDB
                </Button>
                <Divider />
              </Col>
              <Col sm={{ span: 24 }} lg={{ span: 14 }}>
                <Title level={3}>
                  {movie.Title} ({movie.Year})
                </Title>
                <StyledSmallText>Awards: {movie.Awards}</StyledSmallText>
                <Paragraph>{movie.Plot}</Paragraph>
                <Divider />
                <Title level={4}>Genres</Title>
                <StyledSmallText>{movie.Genre}</StyledSmallText>
                <Divider />
                <Title level={4}>Cast</Title>
                <StyledSmallText>
                  <strong>Actors:</strong> {movie.Actors}
                </StyledSmallText>
                <StyledSmallText>
                  <strong>Director:</strong> {movie.Director}
                </StyledSmallText>
                <Divider />
                <Title level={4}>Ratings</Title>
                {movie.Ratings.map(({ Source, Value }) => (
                  <MovieRating key={Source} source={Source} value={Value} />
                ))}
                <MovieRating
                  source="IMDB Rating"
                  value={`${movie.imdbRating} (${movie.imdbVotes} votes)`}
                />
              </Col>
            </Row>
          </>
        )
      )}
    </Modal>
  );
};

MovieModal.propTypes = {
  visible: PropTypes.bool,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieModal;
