import React from "react"
// import "./work-with-us.css";
import Layout from "../components/layout"
import Seo from "../components/seo"
import TrabajaConNosotrosBanner from "./components/trabaja-con-nosotros/trabaja-con-nosotros-banner"
import TrabajaConNosotrosForm from "./components/trabaja-con-nosotros/trabaja-con-nosotros-form"





export default function fourthPage(){

    return (
    <Layout>
        <TrabajaConNosotrosBanner></TrabajaConNosotrosBanner>
        <TrabajaConNosotrosForm></TrabajaConNosotrosForm>
        {/* 
        <div class="applyingSection">
            <div class="form">
                <h2>¡Únete al equipo!</h2>
                <p class="formHeader1">¡Estamos muy contentos con tu interés en trabajar en nuestra empresa!</p>
                <p class="formHeader">El siguiente paso es proporcionarnos tu información llenando este formulario.</p>
                <form action="https://formspree.io/f/mldrqvjv" method="POST" class="boxes">
                    <fieldset>
                        <div class="box">
                            <p class="label">Nombre completo</p>
                            <label for="nombre-completo">
                                <input name="Nombre Completo" id="name" type="text"></input>
                            </label>
                        </div>

                        <div class="box">
                            <p class="label">Email / correo-electrónico</p>
                            <label for="email-adress">
                                <input name="Email" id="email" type="email"></input>
                            </label>
                        </div>

                        <div class="box">
                            <p class="label">Vínculo a su perfil de LinkedIn</p>
                            <label for="url-linkendIn">
                                <input name="Currículo LinkedIn" id="linkedIn" type="url"></input>
                            </label>
                        </div>

                        <div class="box">
                            <p class="label">Posición a la que aspira</p>
                            <label for="desired-position">
                                <input name="Posición Deseada" id="position" type="text"></input>
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit" class="button2">Enviar</button>
                </form>
            </div>
        </div> */}
    </Layout>
)
}

export const Head = () => <Seo title="Trabaja nosotros" />
