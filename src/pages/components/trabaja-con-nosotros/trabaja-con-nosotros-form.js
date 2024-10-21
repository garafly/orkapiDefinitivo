import React from 'react';
import "./trabaja-con-nosotros-form.css"



export default function TrabajaConNosotrosForm() {

    const validateForm = (event) => {

        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const linkedIn = document.getElementById("linkedIn").value;
        const position = document.getElementById("position").value;
        let errorMessage = "";

        if (name === "") {
            errorMessage += "Por favor, llene el campo de nombre completo.\n";
        }
        if (email === "") {
            errorMessage += "Por favor, ingrese su correo electrónico.\n";
        }
        if (linkedIn === "") {
            errorMessage += "Por favor, ingrese su perfil de LinkedIn.\n";
        }
        if (position === "") {
            errorMessage += "Por favor, ingrese la posición a la que aspira.\n";
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {

            event.target.submit();
        }
    }

    return (
        <div className="applyingSection">
            <div className="completeForm">
                <div className="applyingFormIntro">
                    <h3>¡Únete al equipo!</h3>
                    <p className="formHeader1">¡Estamos muy contentos con tu interés en trabajar en nuestra empresa!</p>
                    <p className="formHeader">El siguiente paso es proporcionarnos tu información llenando este formulario:</p>
                </div>
                <form action="https://formspree.io/f/mldrqvjv" method="POST" className="workForm" onSubmit={validateForm}>
                    <fieldset>
                        <div className="box">
                            <p className="label">Nombre completo</p>
                            <label htmlFor="nombre-completo">
                                <input name="Nombre Completo" id="name" type="text" ></input>
                            </label>
                        </div>

                        <div className="box">
                            <p className="label">Email / correo-electrónico</p>
                            <label htmlFor="email-adress">
                                <input name="Email" id="email" type="email" ></input>
                            </label>
                        </div>

                        <div className="box">
                            <p className="label">Vínculo a su perfil de LinkedIn</p>
                            <label htmlFor="url-linkendIn">
                                <input name="Currículo LinkedIn" id="linkedIn" type="url" ></input>
                            </label>
                        </div>

                        <div className="box">
                            <p className="label">Posición a la que aspira</p>
                            <label htmlFor="desired-position">
                                <input name="Posición Deseada" id="position" type="text" ></input>
                            </label>
                        </div>
                        <div className="submitButton">
                            <button type="submit" className="button1">Enviar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}





