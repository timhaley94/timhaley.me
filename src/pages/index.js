import React from 'react';
import {
  About,
  Layout,
  SEO,
  Skills,
  Projects
} from '../components';

const IndexPage = () => (
  <Layout>
    <SEO />
    <About />
    { /* <Skills /> */ }
    <Projects />
  </Layout>
)

export default IndexPage
