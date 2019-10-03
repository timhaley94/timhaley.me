import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import styles from './index.module.css';

function Button({ className, href, children }) {
  return (
    <a href={ href } className={ classNames(styles.container, className) }>
      { children }
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
