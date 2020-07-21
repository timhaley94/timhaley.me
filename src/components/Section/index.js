import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.css';

function Section({
  title,
  headerChildren,
  children,
  noMargin
}) {
  return (
    <div className={ styles.container }>
      <div className={ styles.header }>
        <div className={ styles.titleContainer }>
          <h3 className={ styles.title }>{ title }</h3>
        </div>
        <div>
          { headerChildren }
        </div>
      </div>
      <hr className={ styles.hr } />
      <div className={ classNames(styles.children, { [styles.noMargin]: noMargin }) }>
        { children }
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  headerChildren: PropTypes.node,
  children: PropTypes.node.isRequired,
  noMargin: PropTypes.bool
};

Section.defaultProps = {
  headerChildren: null,
  noMargin: false
};

export default Section;
