import React from "react";
// import "./lotenet-soft.css";
import Seo from "../components/seo"
import Layout from "../components/layout"
import systemBackgroundImage from '../images/fondos/fondo.png';
import BannerLotenet from '../pages/components/lotenetSoft/lotenet-banner-contenido';
import LotenetCaracteristicas from '../pages/components/lotenetSoft/lotenet-caracteristicas';
import LotenetClientes from '../pages/components/lotenetSoft/lotenet-clientes';
import LotenetConsulta from '../pages/components/lotenetSoft/lotenet-consulta';

import { navigate } from 'gatsby'; 

const contactUsClick = (event) => {
    navigate("/contact-us");
  };


export default function secondPage(){
    return (
    <Layout>


        <BannerLotenet></BannerLotenet>
        <LotenetCaracteristicas></LotenetCaracteristicas>
        <LotenetClientes></LotenetClientes>
        <LotenetConsulta></LotenetConsulta>


    </Layout>
    )
}


export const Head = () => <Seo title="LotenetSoft" />