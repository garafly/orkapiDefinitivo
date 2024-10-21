import React from "react";
import "./lotenet-banner-contenido.css";
import Seo from "../../../components/seo";
import systemBackgroundImage from '../../../images/fondos/fondoLotenet2.jpg';
import batCall from '../../../images/complementarios/batCall.png';
import { navigate } from 'gatsby'; 


const contactUsClick = (event) => {
    navigate("/contacto");
  };


export default function BannerLotenet(){
    return (
        <div className="mainContentLotenet">
            <div className="bannerSystemLotenet" style={{ 
                    backgroundImage: `url(${systemBackgroundImage})`, 
                    backgroundRepeat: 'no-repeat',
                    height: '100vh' 
                }}>

            </div>


            <div className="bannerContentSystem">
                <div className="textContentSystem">
                    
                    <div className="mainTitleLotenet">
                        <h1>Conoce Lotenet Soft</h1>
                        <h6>Nuestro sistema de gestión para empresas de lotería.</h6>
                    </div>

                    <div className="bannerPromotion">
                        <h4>El control de tu empresa en <span className="darkRed">tiempo real</span>.</h4>
                        <button onClick={contactUsClick} className="button2">Consulta personalizada</button>
                    </div>

                    <div className="features">
                        <div className="feature1">
                            <h3 className="feature">9 MILLONES <span className="darkOrange">+</span></h3>
                            <p className="subFeature">de transaciones diarias</p>
                        </div>

                        <div className="feature1">
                            <h3 className="feature">24<span className="orange">hr</span></h3>
                            <p className="subFeature">de servicio técnico</p>
                        </div> 
                    </div>
                </div>

                <div className="GraphicContentSystem"
                    style={{ 
                        backgroundImage: `url(${batCall})`, 
                        backgroundRepeat: 'no-repeat',
                        height: '60vh'
                        }}
                >
                </div>
            </div>
        </div>
    )
}


export const Head = () => <Seo title="LotenetSoft" />