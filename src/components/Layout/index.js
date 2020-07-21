import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Footer, SEO } from '..';
import styles from './index.module.css';
import './normalize.css';
import './global.css';

const Layout = ({ noFooter, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={ styles.container }>
        <div className={ styles.content }>
          <main>{ children }</main>
          { !noFooter ? <Footer /> : null }
        </div>
      </div>
      <SEO />
    </>
  )
}

Layout.propTypes = {
  noFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  noFooter: false
};

export default Layout;
