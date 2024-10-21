import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TarjetaContacto from './components/contacto/contacto-tarjeta';
// import backgroundImage from '../images/backgroundContactUs.jpg';


export default function sixthPage(){
    return (
    <Layout>
        <TarjetaContacto></TarjetaContacto>
    </Layout>
    )
}