import React from 'react';
import PropTypes from 'prop-types';
import { Button, Emoji, SecondaryButton } from '..';
import styles from './index.module.css';

function Project({
  emoji,
  title,
  description,
  sourceUrl,
  url,
  tags,
  onAddTag
}) {
  return (
    <div className={ styles.container }>
      <a href={ sourceUrl } className={ styles.headerLink }>
        <div className={ styles.header }>
          <Emoji { ...emoji } />
          <h4 className={ styles.titleText }>
            { title }
          </h4>
          </div>
      </a>
      <p className={ styles.description }>{ description }</p>
      <div className={ styles.footer }>
        <div className={ styles.tags }>
          {
            tags.map(
              tag => (
                <SecondaryButton className={ styles.tag } onClick={ () => onAddTag(tag) }>
                  { tag }
                </SecondaryButton>
              )
            )
          }
        </div>
        <div>
          {
            url
              ? (
                <Button
                  className={ styles.button }
                  href={ url }
                >
                  View
                </Button>
              )
              : null
          }
          <Button
            className={ styles.button }
            href={ sourceUrl }
          >
            Source
          </Button>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  emoji: PropTypes.shape({
    value: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  url: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddTag: PropTypes.func.isRequired
};

Project.defaultProps = {
  url: null
};

export default Project;
