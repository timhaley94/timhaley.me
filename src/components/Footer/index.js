import React from 'react';
import { Emoji } from '..';
import styles from './index.module.css';

const Footer = () => (
  <>
    <hr />
    <footer className={ styles.container }>
      <Emoji value="🔮" alt="crystal ball" />
    </footer>
  </>
);

export default Footer;
