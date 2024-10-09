import React from "react";
import "./lotenet-caracteristicas.css";
import Seo from "../../../components/seo";



export default function LotenetCaracteristicas(){
    return (

    <div className="characteristics">
        <div className="sectionIntro">
            <div className="sectionText">
                <h3>Diseñado para objetivos comerciales únicos</h3>
                <h6>Nos hemos consolidado con la plataforma más estable y operativa del mercado, dando la información en tiempo real justo cuando la requieres.</h6>
            </div>
        </div>

        <div className="cardSection">
            <div className="row">
                <div className="card1">
                    <p className="emphasizedB">Juegos instantáneos</p>
                    <div className="cardSubtext">
                        <p className="normalText">Elabora y vende juegos de forma fácil y efectiva.</p>
                    </div>
                </div>

                <div className="card1">
                    <p className="emphasizedB">Gestión de ventas</p>
                    <div className="cardSubtext">
                        <p className="normalText">Administra tus ventas y puntos con reportes en tiempo real.</p>
                    </div>
                </div>

                <div className="card1">
                    <p className="emphasizedB">Reportes personalizados</p>
                    <div className="cardSubtext">
                        <p className="normalText">Busca y co-relaciona los datos y factores que sean de su interés.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="card1">
                    <p className="emphasizedB">Gestión Humana</p>
                    <div className="cardSubtext">
                        <p className="normalText">Administre y mantenga un registro de las acciones de su personal.</p>
                    </div>
                </div>

                <div className="card1">
                    <p className="emphasizedB">Interfaz Amigable</p>
                    <div className="cardSubtext">
                        <p className="normalText">Diseñada para que su uso sea simple, fácil y veloz para su uso constante.</p>
                    </div>
                </div>

                <div className="card1">
                    <p className="emphasizedB">Actualizaciones Gratis</p>
                    <div className="cardSubtext">
                        <p className="normalText">Desde entrenamientos especiales a diversos recursos de apoyo.</p>
                    </div>
                </div>
            </div>

        </div>

    </div> 


    )
}


export const Head = () => <Seo title="LotenetSoft" />