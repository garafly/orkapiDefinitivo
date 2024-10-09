import React from "react";
import "./lotenet-consulta.css";
import Seo from "../../../components/seo";

// images
import glowingLogo from '../../../images/complementarios/handAndGlowingLotenet.png';
import logoLotenet from '../../../images/logos/logoLotenet.png';




export default function LotenetConsulta(){
    return (

        <div className="software">
        <div className="logoInHand" id="hand" style={{ 
                backgroundImage: `url(${glowingLogo})`, 
                backgroundRepeat: 'no-repeat',

      
            }}>

        </div>
        <div className="textualContent">
            <div className="box">
                <div className="logo" id="logoLotenet" style={{ 
                backgroundImage: `url(${logoLotenet})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center', 
      
            }}>

                </div>

                <div className="diveInSection">
                    <p className="normalText">Conoce con mayor profundidad todos los servicios que nuestro sistema le puede ofrecer.</p>
                    <button className="button1">Adquiere una consulta</button>
                </div>

            </div>
        </div>
    </div>


    )
}


export const Head = () => <Seo title="LotenetSoft" />