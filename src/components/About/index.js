import React from 'react';
import { Image } from '..';
import styles from './index.module.css';

function About() {
  return (
    <div className={ styles.container }>
      <Image />
      <h1 className={ styles.title }>Howdy, I'm Tim!</h1>
      <p className={ styles.description }>
        I'm a software engineer from Chattanooga, TN and who likes
        to write code, play Dungeons and Dragons, and watch NBA
        basketball. This is my corner of the interwebs.
      </p>
    </div>
  );
}

export default About;
