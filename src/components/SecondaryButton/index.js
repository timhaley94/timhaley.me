import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.css';

function SecondaryButton({ className, onClick, children }) {
  return (
    <button onClick={ onClick } className={ classNames(styles.container, className) }>
      { children }
    </button>
  );
}

SecondaryButton.propTypes = {
  onClick: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SecondaryButton;
