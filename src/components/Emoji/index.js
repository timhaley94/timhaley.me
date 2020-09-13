import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.css';

const Emoji = forwardRef(
  ({ value, alt, className }, ref) => {
    return (
      <span
        ref={ ref }
        className={ classNames(styles.container, className) }
        role="img"
        aria-label={ alt }
      >
        { value }
      </span>
    );
  }
);

Emoji.propTypes = {
  value: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Emoji.defaultProps = {
  className: null,
};

export default Emoji;
