import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ label, emoji }) => {
  return (
    <span role="img" aria-label={label}>
      {emoji}
    </span>
  );
};

Emoji.propTypes = {
  emoji: PropTypes.string,
  label: PropTypes.string,
};

Emoji.defaultProps = {
  label: 'Emoji',
};

export default Emoji;
