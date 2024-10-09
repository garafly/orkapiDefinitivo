import React from 'react';
import "./trabaja-con-nosotros-form.css"


export default function TrabajaConNosotrosForm() {
  return (

    <div className="applyingSection">
        <div className="form">
            <h3>¡Únete al equipo!</h3>
            <p className="formHeader1">¡Estamos muy contentos con tu interés en trabajar en nuestra empresa!</p>
            <p className="formHeader">El siguiente paso es proporcionarnos tu información llenando este formulario.</p>
            <form action="https://formspree.io/f/mldrqvjv" method="POST" className="boxes">
                <fieldset>
                    <div className="box">
                        <p className="label">Nombre completo</p>
                        <label htmlFor="nombre-completo">
                            <input name="Nombre Completo" id="name" type="text"></input>
                        </label>
                    </div>

                    <div className="box">
                        <p className="label">Email / correo-electrónico</p>
                        <label htmlFor="email-adress">
                            <input name="Email" id="email" type="email"></input>
                        </label>
                    </div>

                    <div className="box">
                        <p className="label">Vínculo a su perfil de LinkedIn</p>
                        <label htmlFor="url-linkendIn">
                            <input name="Currículo LinkedIn" id="linkedIn" type="url"></input>
                        </label>
                    </div>

                    <div className="box">
                        <p className="label">Posición a la que aspira</p>
                        <label htmlFor="desired-position">
                            <input name="Posición Deseada" id="position" type="text"></input>
                        </label>
                    </div>
                </fieldset>
                <div className="submitButton">
                    <button type="submit" className="button2">Enviar</button>
                </div>
            </form>
        </div>
    </div>


   


  );
}
