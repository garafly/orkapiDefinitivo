import React from 'react';
import "./trabaja-con-nosotros-banner.css"
import backgroundImage from '../../../images/fondos/workWithUsBanner.png';
import puzzlePiece from '../../../images/complementarios/workWithUsPuzzlePiece.png';



export default function TrabajaConNosotrosBanner() {
  return (


    <div className="bannerHeader">
        <div className="textContent">
            <div className="text">
                <h1>¿Te gustaría pertenecer al equipo?</h1>
                <p>Siempre estamos abiertos a la inclución de nuevos talentos a nuestro habilidoso equipo. ¡Anímate a compartir el <span className="darkOrange">tuyo</span>!</p>
            </div>
        </div>

        <div className="graphicContent"
            style={{ 
                backgroundImage: `url(${backgroundImage})`, 
                backgroundRepeat: 'no-repeat',
                height: '100vh' 
                }}
        >
                <div className="puzzlePiece"
                    style={{ 
                        backgroundImage: `url(${puzzlePiece})`, 
                        backgroundRepeat: 'no-repeat',
                        height: '50vh' 
                        }}
                >

                </div>
        </div>
</div>

   


  );
}



