import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Emoji } from '..';
import styles from './index.module.css';

function Header() {
  return (
    <header className={ styles.container }>
      <div className={ styles.content }>
        <Link className={ styles.link } to="/">
          <span className={ styles.logo }>
            <Emoji value={ '🔮' } alt="crystal ball" />
            <h4 className={ styles.logoText }>Tim Haley</h4>
          </span>
        </Link>
        <nav>
          <Link className={ styles.navLink } to="/#me">Me</Link>
          { /* <Link className={ styles.navLink } to="/#skills">Skills</Link> */ }
          <Link className={ styles.navLink } to="/#projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
