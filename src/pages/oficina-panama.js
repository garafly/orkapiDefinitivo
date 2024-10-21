import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import "./oficina-rep-dom.css";


const GoogleMap = () => {
    const [isSSR, setIsSSR] = useState(true);
  
    useEffect(() => {
      setIsSSR(false); 
    }, []);
  
    if (isSSR) return null; 
    return (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5091.082466557811!2d-79.59234479999999!3d8.9275418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca5ad579424ff%3A0xfdf9b9a6549f1269!2sOrkapi%20Panama%2C%20S.%20A.!5e1!3m2!1ses!2sdo!4v1729545794770!5m2!1ses!2sdo"
          width="400"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      );
    };





export default function seventhPage(){
    return (
    <Layout>
        <div className="main">
        <div className="containerOffice">
            <div className="headerOffice">
                <h3>Nuestra oficina</h3>
                <h4>Sede Panamá</h4>
                <h6 className="loc">Está ubicada en el Building 3825, Parque Internacional de Negocios, Panamá, Provincia de Panamá Oeste, Panamá. </h6>
            </div>

            <div className="mapG">
                <GoogleMap></GoogleMap>
            </div>

        </div>



        </div>

    </Layout>
    )}