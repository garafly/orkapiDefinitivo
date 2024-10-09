import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import SobreNosotrosBanner from './components/sobre-nosotros/sobre-nosotros-banner';
import IdentidadCorporativa from './components/sobre-nosotros/sobre-nosotros-identidad';



export default function thirdPage(){
  return (
  <Layout>
        <SobreNosotrosBanner></SobreNosotrosBanner>
        <IdentidadCorporativa></IdentidadCorporativa>

  </Layout>
)}

export const Head = () => <Seo title="Sobre nosotros" />

// export default thirdPage
