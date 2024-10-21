import React from 'react';
import "./index-banner-fondo.css"
import indexBackgroundImage from '../../../images/fondos/indexBackground.jpg';
import { navigate } from 'gatsby'; 
import Servicios from './index-servicios';


const lotenetClick = (event) => {
  navigate("/lotenet-soft");
};

const aboutUsClick = (event) => {
  navigate("/sobre-nosotros");
};


export default function HomeBanner() {
  return (


    <div className="mainContainer">

        <div className="imageBackground"
            style={{ 
                backgroundImage: `url(${indexBackgroundImage})`, 
                backgroundRepeat: 'no-repeat',
                height: '210vh' 
            }}
        > 
        </div>
        <div className="textContent">
            <div className="textBox">
                <h1>Soluciones software</h1>
                <h6>Actualmente empresa líder en sistemas de lotería.</h6>
            </div>
            <div className="buttons">
                    <button onClick={lotenetClick} className="button2">Nuestro sistema</button>
                    <button onClick={aboutUsClick} className="button1">Sobre nosotros</button>
            </div>
        </div>
        <Servicios></Servicios>
    </div>
    

   


  );
}






