import React from 'react';
import "./sobre-nosotros-banner.css"
import { Link } from "gatsby"
import backgroundImage from '../../../images/fondos/aboutUsBanner.png';
import portraits from '../../../images/complementarios/aboutUsPortraits.png'



export default function SobreNosotrosBanner() {
  return (

<div id="backgroundAboutUs" className="bannerAbout" style={{ 
    backgroundImage: `url(${backgroundImage})`, 
    backgroundRepeat: 'no-repeat',
    height: '100vh' 
    }}
  >
    <div className="bannerContentAbout">
      <div className="textContentAbout">

        <div className="textAbout">
          <h1>10 años de trayectoria</h1>
          <h6>Brindando el mejor servicio, respaldado por el mejor equipo de trabajo.</h6>
        </div>
        <div className="buttonAbout">
          <Link to="#mision">
          <button className="button2">Conoce nuestra identidad coorporativa</button>
          </Link>
        </div>

      </div>
      
    </div>

      <div className="graphicContentAbout" style={{ 
          backgroundImage: `url(${portraits})`, 
          backgroundRepeat: 'no-repeat',
          height: '90vh' 
          }}
        >

      </div>

</div>

   


  );
}
