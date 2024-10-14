import React from 'react';
import './contacto-tarjeta.css';

import backgroundImage from '../../../images/fondos/backgroundContactUs.jpg'

export default function TarjetaContacto() {
  return (

        <div className="container">
            <div className="imgSide"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundRepeat: 'no-repeat',
                    height: '100vh' 
                }}
            ></div>

            <div className="formSide">
                <div className="formContainer">
                    <h1>Contáctanos</h1>
                    <p className="subText">Siéntase con toda la liberta de escribirnos para saber más, adquirir nuestros servicios o para alguna colaboración</p>
                    <form  action="https://formspree.io/f/xgvwgqzg" method="POST" className="theForm">
                        <fieldset>
                            <div className="formBox1">
                                <p>Nombre</p>
                                <label htmlFor="nombre-completo">
                                    <input name="Nombre" className="type1" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox1">
                                <p>Compañía</p>
                                <label htmlFor="nombre-empresa">
                                    <input name="Compañía" className="type1" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox1">
                                <p>Email / Correo</p>
                                <label htmlFor="email">
                                    <input name="Email" className="type1" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox1">
                                <p>Tema</p>
                                <label htmlFor="tema">
                                    <input name="Tema" className="type1" type="text"></input>
                                </label>
                            </div>
                            <div className="formBox2">
                                <p>Mensaje</p>
                                <label htmlFor="message">
                                    <input name="Mensaje" className="type2" type="textbox"></input>
                                </label>
                            </div>
                        </fieldset>
                        <button type="submit" className="button1">Enviar Mensaje</button>
                    </form>


                </div>
            </div>

        </div> 

  );
}
