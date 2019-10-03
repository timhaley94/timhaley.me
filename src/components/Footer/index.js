import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './index.module.css';

function Icon({ url }) {
  return (
    <div className={ styles.icon }>
      <SocialIcon url={ url } />
    </div>
  );
}

const Footer = () => (
  <>
    <hr />
    <footer className={ styles.container }>
      <div className={ styles.icons }>
        <Icon url="https://www.linkedin.com/in/tim-haley/" />
        <Icon url="https://github.com/timhaley94" />
        <Icon url="mailto:tim.d.haley@gmail.com" />
      </div>
      <p className={ styles.copyright }>
        © {new Date().getFullYear()} Tim Haley
      </p>
    </footer>
  </>
);

export default Footer;
