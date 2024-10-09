import React from "react";
import { useEffect } from "react";
import "./header.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

//menu icons
import homeIcon from "../images/iconos/homeIcon.svg";
import roundHubIco from "../images/iconos/roundHubIcon.svg";
import buildingIcon from "../images/iconos/buildingIcon.svg";
import puzzleIcon from "../images/iconos/puzzlePieceIcon.svg";
import downloadIcon from "../images/iconos/downloadIcon.svg";
import paperPlaneIcon from "../images/iconos/paperPlaneIcon.svg";


import { navigate } from 'gatsby'; 

const inicioClick = (event) => {
  navigate("/");
};

const lotenetClick = (event) => {
  navigate("/lotenet-soft");
};

const aboutUsClick = (event) => {
  navigate("/sobre-nosotros");
};

const workWithUSClick = (event) => {
  navigate("/work-with-us");
};

const downloadsClick = (event) => {
  navigate("/descargas");
};

const contactUsClick = (event) => {
  navigate("/contacto");
};




const Header = ({ siteTitle }) => {
  useEffect(() => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
      });
    });

    const handleClickOutside = (event) => {
      const isClickInside = event.target.closest('.dropdown');
      if (!isClickInside) {
        dropdownToggles.forEach(toggle => {
          var dropdownMenu = toggle.nextElementSibling;
          dropdownMenu.style.display = 'none';
        });
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      dropdownToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleClickOutside);
      });
    };
  }, []);

  return (
    <header>
      <Link to="/">
      <div className="logo">
        <StaticImage alt="logo orkapi" src="../images/orkapi-logo.svg" className="logo-image" />
      </div>
      </Link>

      <div className="navLinks">
      <div className="navLink"><a className="navText" href="/">Inicio</a></div>
        <div className="navLink"><a className="navText" href="/lotenet-soft">Sistema de lotería</a></div>
        <div className="navLink"><a className="navText" href="/sobre-nosotros">Sobre nosotros</a></div>
        <div className="navLink"><a className="navText" href="/work-with-us">Únete al equipo</a></div>
        <div className="navLink"><a className="navText" href="/descargas">Descargas</a></div>
        <div className="navLinkB"><span className="underline--magical"><a className="navText" href="/contacto">Contáctanos</a></span></div>
      </div>

      <div className="mobile-menu dropdown">
        <div className="dropdown-toggle">
          <StaticImage alt="menu" src="../images/menuIcon.svg" className="menuIcon" />
        </div>
        <div className="dropdown-menu">
          <div className="linksDropdownMenu">

            <div className="menuDivision">

                <div onClick={inicioClick} className="dropdown-item">
                      {/* <StaticImage alt="homeIcon" src="../images/homeIcon.svg" className="mobileNavIcons" /> */}
                          <div className="mobileNavIcons" style={{backgroundImage: `url(${homeIcon})`,backgroundRepeat: 'no-repeat',height: '4vh',backgroundSize:'80% auto', backgroundPosition:'center'}}>
                          </div>
                          
                          <div className="textContent">
                            <p>Inicio</p>
                            <p>Nuestra página principal.</p>
                          </div>
                </div>

                <div onClick={lotenetClick} className="dropdown-item">
                  {/* <StaticImage alt="roundHubIcon" src="../images/roundHubIcon.svg" className="mobileNavIcons" /> */}
                    <div className="mobileNavIcons" style={{backgroundImage: `url(${roundHubIco})`,backgroundRepeat: 'no-repeat',height: '4vh', backgroundSize:'80% auto', backgroundPosition:'center'}}>
                    </div>
                    <div className="textContent">
                      <p >Nuestro sistema</p>
                      <p>Explora el alcance de lo que te podemos ofrecer.</p>
                    </div>
                </div>

                <div onClick={aboutUsClick} className="dropdown-item">
                  {/* <StaticImage alt="buildingIcon" src="../images/buildingIcon.svg" className="mobileNavIcons" /> */}
                    <div className="mobileNavIcons" style={{backgroundImage: `url(${buildingIcon})`,backgroundRepeat: 'no-repeat',height: '4vh', backgroundSize:'80% auto', backgroundPosition:'center'}}>
                    </div>
                    <div className="textContent">
                      <p>Sobre nosotros</p>
                      <p>Conoce más sobre nuestra empresa.</p>
                    </div>
                </div>
            </div>

            <div className="menuDivision">

              <div onClick={workWithUSClick} className="dropdown-item">
                {/* <StaticImage alt="puzzleIcon" src="../images/puzzlePieceIcon.svg" className="mobileNavIcons" /> */}
                  <div className="mobileNavIcons" style={{backgroundImage: `url(${puzzleIcon})`,backgroundRepeat: 'no-repeat',height: '4vh',backgroundSize:'80% auto', backgroundPosition:'center'}}>
                  </div>
                  <div className="textContent">
                    <p>Únete al equipo</p>
                    <p>Comparte y expande tus habilidades.</p>
                  </div>
              </div>

                <div onClick={downloadsClick} className="dropdown-item">
                  {/* <StaticImage alt="downloadIcon" src="../images/downloadIcon.svg" className="mobileNavIcons" /> */}
                    <div className="mobileNavIcons" style={{backgroundImage: `url(${downloadIcon})`,backgroundRepeat: 'no-repeat',height: '4vh',backgroundSize:'80% auto', backgroundPosition:'center'}}>
                    </div>
                    <div className="textContent">
                      <p>Descargas</p>
                      <p>Apps, apk, apis y documentación.</p>
                    </div>
                </div>

                <div onClick={contactUsClick} className="dropdown-item">
                  {/* <StaticImage alt="paperPlaneIcon" src="../images/paperPlaneIcon.svg" className="mobileNavIcons" /> */}
                    <div className="mobileNavIcons" style={{backgroundImage: `url(${paperPlaneIcon})`,backgroundRepeat: 'no-repeat',height: '4vh', backgroundSize:'80% auto', backgroundPosition:'center'}}>
                    </div>
                    <div className="textContent">
                      <p>Contáctanos</p>
                      <p>¡Colaboremos!</p>
                    </div>
                </div>
            </div>

          </div>

          <div className="socialDropdownMenu">

            <div className="socialMediaLogos">
              <a href="https://www.instagram.com/orkapi_srl?igsh=YzUzcmRsazBmMmtr">
                <div className="socialMediaLogo">
                  <StaticImage alt="instagramLogo" src="../images/instagramLogo.svg" />
                </div>
              </a>

              <a href="https://www.facebook.com/share/64r1nJJNFnPjzppz/?mibextid=LQQJ4d">
                <div className="socialMediaLogo">
                  <StaticImage alt="facebookLogo" src="../images/facebookLogo.svg" />
                </div>
              </a>

              <a href="https://x.com/i/flow/login?redirect_after_login=%2Forkapitech">
                <div className="socialMediaLogo">
                  <StaticImage alt="twitterLogo" src="../images/twitterLogo.svg" />
                </div>
              </a>

              <a href="https://do.linkedin.com/company/orkapi-technology">
                <div className="socialMediaLogo">
                  <StaticImage alt="linkedinLogo" src="../images/linkedInLogo.svg" />
                </div>
              </a>
              
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}



export default Header;
