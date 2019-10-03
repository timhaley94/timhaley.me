import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function Emoji({ value, alt }) {
  return (
    <span
      className={ styles.container }
      role="img"
      aria-label={ alt }
    >
      { value }
    </span>
  );
}

Emoji.propTypes = {
  value: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Emoji;
