import React from 'react';
import './contacto-tarjeta.css';

import backgroundImage from '../../../images/fondos/backgroundContactUs.jpg'

export default function TarjetaContacto() {
    const validateForm = (event) => {

        event.preventDefault();
        
        const nombre = document.getElementById("nombre-contactante").value;
        const empresa = document.getElementById("empresa-contactante").value;
        const email = document.getElementById("email-contactante").value;
        const tema = document.getElementById("tema-del-contactante").value;
        const mensaje = document.getElementById("mensaje-del-contactante").value;
        let errorMessage = "";

        if (nombre === "") {
            errorMessage += "Por favor, llene el campo de nombre completo.\n";
        }
        if (empresa === "") {
            errorMessage += "Por favor, identifique la empresa de la cual se dirige o si es un usuario independiente.\n";
        }
        if (email === "") {
            errorMessage += "Por favor, ingrese su correo electrónico.\n";
        }
        if (tema === "") {
            errorMessage += "Por favor, comunique el tema o propósito de su mensaje.\n";
        }

        if (mensaje === "") {
            errorMessage += "Por favor, escriba o proporcione un mensaje.\n";
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {

            event.target.submit();
        }
    }

  return (

        <div className="containerContacto">
            <div className="imgSideContacto"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundRepeat: 'no-repeat',
                    height: '100vh' 
                }}
            ></div>

            <div className="formSideContacto">
                <div className="formContainer">

                    <div className='headerContacto'>
                        <h1>Contáctanos</h1>
                        <h6 className="subText">Siéntase con toda la libertad de escribirnos para saber más, adquirir nuestros servicios o para alguna colaboración.</h6>
                    </div>

                    <form action="https://formspree.io/f/xgvwgqzg" method="POST" className="theForm" onSubmit={validateForm}>
                        <fieldset>
                            <div className="formBox1">
                                <p>Nombre</p>
                                <label htmlFor="nombre-completo">
                                    <input name="Nombre" className="type1"  id="nombre-contactante" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox1">
                                <p>Compañía</p>
                                <label htmlFor="nombre-empresa">
                                    <input name="Compañía" className="type1" id="empresa-contactante" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox1">
                                <p>Email / Correo</p>
                                <label htmlFor="email">
                                    <input name="Email" className="type1" id="email-contactante" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox1">
                                <p>Tema</p>
                                <label htmlFor="tema">
                                    <input name="Tema" className="type1" id="tema-del-contactante" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox2">
                                <p>Mensaje</p>
                                <label htmlFor="message">
                                    <input name="Mensaje" className="type2" id="mensaje-del-contactante"  type="textbox"></input>
                                </label>
                            </div>

                            <div className="contactSubmitButton">
                                <button type="submit" className="button1">Enviar Mensaje</button>
                            </div>

                        </fieldset>

                    </form>

                </div>
            </div>

        </div> 

  );
}
