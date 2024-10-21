import React from 'react';
import "./index-servicios.css"





export default function Servicios() {
  return (

      <div className="sectionOurServices">
          <div className="titleIndex">
            <h3>Nuestros servicios</h3>
          </div>
          
          <div className="services">
            <div className="rowIndex">
                <div className="cardIndex">
                  <div className="headerIndex">
                    <h4>Plataforma de Gestión de Juegos de Lotería</h4>
                  </div>
                  <div className="bodyIndex">
                    <p className="normalText">Desarrollo de software completos para la gestión de juegos de lotería, incluyendo administración de sorteos, gestión de premios, seguimiento de ventas, entre otras funcionalidades.</p>
                  </div>
                </div>

                <div className="cardIndex">
                  <div className="headerIndex">
                    <h4>Soluciones de Terminales de Puntos de Ventas</h4>
                  </div>
                  <div className="bodyIndex">
                    <p className="normalText">Implementación y mantenimiento de terminales de punto de venta de boletos de lotería, recargas móviles y otros productos.</p>
                  </div>
                </div>

                <div className="cardIndex">
                  <div className="headerIndex">
                    <h4>Desarrollo de Juegos Personalizados</h4>
                  </div>
                  <div className="bodyIndex">
                    <p className="normalText">Diseño y desarrollo de juegos de lotería personalizados según las necesidades y preferencias de cada cliente.</p>
                  </div>
                </div>
            </div>

            <div className="rowIndex">
              <div className="cardIndex">
                    <div className="headerIndex">
                      <h4>Desarrollo de Aplicaciones Móviles</h4>
                    </div>
                    <div className="bodyIndex">
                      <p className="normalText">Creación de aplicaciones móviles personalizadas para plataformas Android, con interfaces intuitivas y actractivas para usuarios de juegos de lotería.</p>
                    </div>
              </div>

              <div className="cardIndex">
                  <div className="headerIndex">
                    <h4>Desarrollo de Interfaces para Resultados de Sorteos en Vivo</h4>
                  </div>
                  <div className="bodyIndex">
                    <p className="normalText">Desde el desarrollo de funcionamiento y contenido gráfico de este tipo de interfaces, a servicios especializados como animaciones 2D y 3D.</p>
                  </div>
              </div>

              <div className="cardIndex">
                  <div className="headerIndex">
                    <h4>Mantenimiento y Soporte Técnico</h4>
                  </div>
                  <div className="bodyIndex">
                    <p className="normalText">Servicios de mantenimiento preventivo y correctivo, con soporte técnico 24/7 para asegurar la operación continua y eficiente de las plataformas de lotería.</p>
                  </div>
              </div>
            </div>
          </div>
      </div>


  );
}
