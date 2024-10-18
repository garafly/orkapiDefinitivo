import React from 'react';
import "./trabaja-con-nosotros-banner.css"
import backgroundImage from '../../../images/fondos/workWithUsBanner.png';
import puzzlePiece from '../../../images/complementarios/workWithUsPuzzlePiece2.png';



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

        </div>
      
        <div className="puzzlePiece"
                    style={{ 
                        backgroundImage: `url(${puzzlePiece})`, 
                        backgroundRepeat: 'no-repeat',
                        height: '100vh' ,
                        filter: 'drop-shadow(15px 15px 5px rgb(158, 0, 0,0.18))'
                        // filter: 'drop-shadow(30px 10px 4px rgb(158, 0, 0,0.2))'
                        }}
        >
        </div>
</div>

   


  );
}



