import React from 'react';
import PropTypes from 'prop-types';

const placeholderPoster =
  'https://via.placeholder.com/213x260.png?text=Poster+not+provided';

const MovieImage = ({ poster, title, ...props }) => {
  const coverImage = React.useMemo(() => {
    return poster === 'N/A' ? placeholderPoster : poster;
  }, [poster]);

  return <img alt={title} src={coverImage} {...props} />;
};

MovieImage.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
};

export default MovieImage;
