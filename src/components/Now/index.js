import React from 'react';
import { Emoji, Section } from '..';
import styles from './index.module.css';

function About() {
  return (
    <Section title="What am I up to now?" noMargin>
      <p className={ styles.caption }>
        (This is a{ ' ' }
        <a
          className={ styles.link }
          target="_blank"
          rel="noopener"
          href="https://nownownow.com/about"
        >
          now page
        </a>
        )
      </p>
      <div className={ styles.container }>
        <p className={ styles.p }>
          Laura and I have made our lives in Chattanooga a little more permenant
          by buying a house. We're currently in the process of building a fence
          so we can buy a dog. <Emoji value="🐶" alt="dog" />
        </p>
        <p className={ styles.p }>
          I'm working as a Backend Engineer at <a href="https://trello.com/">Trello</a>{ ' ' }
          and learning a ton about operating systems at scale. I'm also slowly finishing a
          Master's degree in Computer Science from Georgia Tech.
        </p>
        <p className={ styles.p }>
          My main hobbies include running, cooking, and playing board games. I hope to
          run another marathon as soon as my achilles tendonitis clears up and my next
          culinary goal is to make{ ' ' }
          <a href="https://www.youtube.com/watch?v=jFM_rJ5MtYk&t=222s">Tonkotsu Ramen</a>.
          <Emoji value="🍜" alt="ramen" />
        </p>
      </div>
    </Section>
  );
}

export default About;
