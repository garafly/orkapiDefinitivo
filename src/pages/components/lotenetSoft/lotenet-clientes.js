import React from "react";
import "./lotenet-clientes.css";
import Seo from "../../../components/seo";

// images
import lotedom from '../../../images/clientes/lotedomGrey.png';
import loteka from '../../../images/clientes/lotekaGrey.png';
import laPrimera from '../../../images/clientes/laPrimeraGrey.png'; 
import panama from '../../../images/clientes/panamaGrey.png';
import lotewin from '../../../images/clientes/lotewinGrey.png';
import espinal from '../../../images/clientes/espinalGrey.png';
import jt from '../../../images/clientes/jtGrey.png';
import haiti from '../../../images/clientes/haitiGrey.png';
import star from '../../../images/clientes/starGrey.png';




export default function LotenetClientes(){
    return (

 
    <div className="ourClients">
        <div className="row">
            <div className="cliente" id="lotedom" style={{ 
                backgroundImage: `url(${lotedom})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' }}>
            </div>

            <div className="cliente" id="loteka" style={{ 
                backgroundImage: `url(${loteka})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>
            </div>

            <div className="cliente" id="laPrimera" style={{ 
                backgroundImage: `url(${laPrimera})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>
            </div>

            <div className="cliente" id="panama" style={{ 
                backgroundImage: `url(${panama})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>
            </div>

            <div className="cliente" id="lotewin" style={{ 
                backgroundImage: `url(${lotewin})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>
            </div>
        </div>

        <div className="row">
            <div className="cliente" id="espinal" style={{ 
                backgroundImage: `url(${espinal})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>    
            </div>

            <div className="cliente" id="jt" style={{ 
                backgroundImage: `url(${jt})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>  
            </div>

            <div className="cliente" id="haiti" style={{ 
                backgroundImage: `url(${haiti})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>  
            </div>

            <div className="cliente" id="star" style={{ 
                backgroundImage: `url(${star})`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',}}>    
            </div>
        </div>
    </div>


    )
}


export const Head = () => <Seo title="LotenetSoft" />