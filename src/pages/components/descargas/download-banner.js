import React from 'react';
import './download-banner.css';
import downloadsBackgroundImage from '../../../images/fondos/backgroundDownloads.jpg'
import runnerLogo from '../../../images/logos/runner-logo.png'

export default function TarjetaDescargas() {
  return (

    <div className="pageContainer">
        <div className="downloadCard"
          style={{
            backgroundImage: `url(${downloadsBackgroundImage})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        ></div>

        <div className="downloadInfo">
          <div className="header">
            <h4>Descargas</h4>
          </div>
          <div className="downloadOption">
            <div className="logo"
                style={{
                    backgroundImage: `url(${runnerLogo})`,
                    backgroundRepeat: "no-repeat",
                    height: "10vh",
                }}
            >

            </div>

          </div>
          <div className='downloadButton'>
            <a href="/runner_v0.1.2.apk" download="runner_v0.1.2.apk" target="_blank">
              <button className="button1">Descargar</button>
            </a>
          </div>
        </div>
    </div>

   


  );
}
