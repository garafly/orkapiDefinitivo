import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.module.css"


import HomeBanner from './components/index/index-banner-fondo';
// import Servicios from './components/index/index-servicios';





export default function Home() {
  return (
  <Layout>
    <HomeBanner></HomeBanner>
    {/* <Servicios></Servicios> */}
  </Layout>
  );
}



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

// export default IndexPage
