import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function Section({ title, anchor, headerChildren, children }) {
  return (
    <div className={ styles.container }>
      <div className={ styles.header }>
        <div className={ styles.titleContainer }>
          <a name={ anchor }>
            <h3 className={ styles.title }>{ title }</h3>
          </a>
        </div>
        <div>
          { headerChildren }
        </div>
      </div>
      <hr className={ styles.hr } />
      <div className={ styles.children }>
        { children }
      </div>
    </div>
  );
}

Section.propTypes = {
  anchor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headerChildren: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
