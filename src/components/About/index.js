import React from 'react';
import { Image } from '..';
import styles from './index.module.css';

function About() {
  return (
    <div className={ styles.container }>
      <a name="me">
        <Image />
        <h1 className={ styles.title }>Howdy, I'm Tim!</h1>
        <p className={ styles.description }>
          I'm a software engineer from Chattanooga, TN and who likes
          to write code, play Dungeons and Dragons, and watch NBA
          basketball. This site is a showcase of some of my work.
        </p>
      </a>
    </div>
  );
}

export default About;
