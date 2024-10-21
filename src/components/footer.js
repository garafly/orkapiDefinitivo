import React, { useState } from "react";
import "./footer.css";
import Dropdown from "./dropdownMenu";
import { StaticImage } from "gatsby-plugin-image";

//mapas
import domMap from "../images/mapas/repDom.svg";
import panMap from "../images/mapas/panama.svg";


const currentYear = new Date().getFullYear();

function Footer() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedButton, setSelectedButton] = useState('first');
  // const [isOpen, setIsOpen] = useState(false);

  const handleFlipToFront = () => {
    setIsFlipped(false);
    setSelectedButton('first');
  };

  const handleFlipToBack = () => {
    setIsFlipped(true);
    setSelectedButton('second');
    console.log('flipped to back');
  };

  //MENU OPTIONS AND LINKS
  const menuItems1 = [
    {label:"República Dominicana", url:"/oficina-rep-dom" },
    {label: "Panamá", url:"/oficina-panama"}
  ];

  const menuItems2 = [
    {label:"Plataforma de lotería", url:"/lotenet-soft"},
    {label:"Nuestros servicios", url:"/"},
    {label: "Sobre nosotros", url:"/sobre-nosotros"}
  ];

  const menuItems3 = [
    {label:"Descargas y documentaciones", url:"/descargas"},
    {label: "Únete al equipo", url: "/work-with-us"}
  ];
  const menuItems4 = [
    {label:"info@orkapi.com"}];


  return (
    <footer>
      <div className="footerContent">
        <div className="sectionA">
          <h2>Nuestras oficinas</h2>

          <div className="cardContainer">
            <div className={`flipCard ${isFlipped ? 'flipped' : ''}`}>
              <div className="locationOfficeDR">
                {/* <StaticImage alt="dominicanRepublicMap" src="../images/repDom.svg" className="officeLocationMaps" /> */}
                <div className="mapa" style={{backgroundImage: `url(${domMap})`,backgroundRepeat: 'no-repeat',height: '15vh',backgroundSize:'45% auto', backgroundPosition:'center' }}></div> 
                <p>García Godoy #81 Plaza Estela, Suite 210 La Vega, República Dominicana.</p>
                <p>Tel: 809-573-8786</p>
              </div>

              <div className="locationOfficePanama">
                {/* <StaticImage alt="panamaMap" src="../images/panama.svg" className="officeLocationMaps" /> */}
                <div className="mapa" style={{backgroundImage: `url(${panMap})`,backgroundRepeat: 'no-repeat',height: '15vh',backgroundSize:'45% auto', backgroundPosition:'center'}}></div> 
                <p>Building 3855, Parque Internacional de Negocios, Panamá, Provincia de Panamá, Panamá</p>
                <p>Tel: +507 838-8989</p>
              </div>
            </div>

            <div className="buttonsFooter">
              <button onClick={handleFlipToFront} 
                className={selectedButton === 'first' ? 'selected' : ''}
              >
                <span>República Dominicana</span>
              </button>
              <button onClick={handleFlipToBack} 
                className={selectedButton === 'second' ? 'selected' : ''}
              >
                <span>Panamá</span>
              </button>
          </div>


          </div>
        </div>

        <div className="section">
          <div className="title">
            <h2>En nuestra página</h2>
          </div>
          <div className="links">
            <a className="footerText" href="/lotenet-soft" >Plataforma de lotería</a>
            <a className="footerText" href="/" >Nuestros servicios</a>
            <a className="footerText" href="/sobre-nosotros" >Sobre nosotros</a>
          </div>
          
        </div>

        <div className="section">
          <div className="title">
            <h2>Recursos</h2>
          </div>
          <div className="links">
            <a className="footerText" href="/descargas" >Descargas y documentaciones</a>
            <a className="footerText" href="/work-with-us" >Únete al equipo</a>
          </div>
        </div>

        <div className="section">
          <div className="title">
            <h2>Asistencia</h2>
          </div>
          <div className="links">
            <a className="footerText" href="/contacto" >Contáctanos</a>
            <p>Email: info@orkapi.com</p>
          </div>

          <div className="socialMedia">
              <a href="https://www.instagram.com/orkapi_srl?igsh=YzUzcmRsazBmMmtr">
                <div className="socialMediaLogo">
                  <StaticImage alt="instagramLogo" src="../images/redes-sociales/instagramLogo.svg" />
                </div>
              </a>

              <a href="https://www.facebook.com/share/64r1nJJNFnPjzppz/?mibextid=LQQJ4d">
                <div className="socialMediaLogo">
                  <StaticImage alt="facebookLogo" src="../images/redes-sociales/facebookLogo.svg" />
                </div>
              </a>

              <a href="https://x.com/i/flow/login?redirect_after_login=%2Forkapitech">
                <div className="socialMediaLogo">
                  <StaticImage alt="twitterLogo" src="../images/redes-sociales/twitterLogo.svg" />
                </div>
              </a>
              
              <a href="https://do.linkedin.com/company/orkapi-technology">
                <div className="socialMediaLogo">
                  <StaticImage alt="linkedInLogo" src="../images/redes-sociales/linkedinLogo.svg" />
                </div>
              </a>
          </div>

        </div>
      </div>

      <div className="copyright">
        <h5>© {currentYear} Orkapi. All Rights Reserved.</h5>
      </div>
      
      <div className="mobileFooter">
        <Dropdown title="Nuestras oficinas" items={menuItems1} />
        <Dropdown title="En nuestra página" items={menuItems2} />
        <Dropdown title="Recursos" items={menuItems3} />
        <Dropdown title="Asistencia" items={menuItems4} />


        <div className="socialMedia">
          <div className="iconsContainer">
            <a href="https://www.instagram.com/orkapi_srl?igsh=YzUzcmRsazBmMmtr">
              <div className="icon">
                <StaticImage alt="instagramLogo" src="../images/redes-sociales/instagramLogo.svg"/>
              </div>
            </a>

            <a href="https://www.facebook.com/share/64r1nJJNFnPjzppz/?mibextid=LQQJ4d">
              <div className="icon">
                <StaticImage alt="facebookLogo" src="../images/redes-sociales/facebookLogo.svg" />
              </div>
            </a>

            <a href="https://x.com/i/flow/login?redirect_after_login=%2Forkapitech">
              <div className="icon">
                <StaticImage alt="twitterLogo" src="../images/redes-sociales/twitterLogo.svg" />
              </div>
            </a>

            <a href="https://do.linkedin.com/company/orkapi-technology">
              <div className="icon">
                <StaticImage alt="linkedInLogo" src="../images/redes-sociales/linkedinLogo.svg" />  
              </div>
            </a>

          </div>

          <div className="end">
            <h5 className="copyR">© {currentYear} Orkapi. All Rights Reserved.</h5>
          </div>
        </div>      
  



      </div>

    </footer>
  );
}

export default Footer;
