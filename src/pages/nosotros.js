import React from "react";
import { Fragment } from "react";

//componentes
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

//resources
import imgTena from "../assets/img/img_tena.png";
import imgTena2 from "../assets/img/img_tena2.png";

const Nosotros = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="section-nosotros">
        <div className="container contenido-nosotros">
          <div className="parrafo">
            <h1>¿Quiénes somos?</h1>
            <p>
              Essity es una compañía líder en el mundo en higiene y salud.
              Estamos comprometidos a mejorar el bienestar con nuestros
              productos y servicios.
            </p><br/>
            <p>
              Lo que contribuye al éxito de Essity es nuestro entendimiento,
              conocimiento e información acerca de las necesidades de los
              clientes y consumidores, y nuestra habilidad de transformar esto
              en ofertas innovadoras que mejoran la calidad de vida y facilitan
              la vida diaria de muchas personas.
            </p>
          </div>
          <div className="img-nosotros">
            <img src={imgTena} alt="" />
          </div>
        </div>
      </section>

      <div className="rectangle-63">
        <div className="container">
          <p>
            Los productos de Essity se venden aproximadamente en 150 países bajo
            las marcas globales; en México nuestras marcas son: TENA®, Saba®,
            Regio®, Leukoplast® y Tork®.
          </p>
          <div className="img-parrafo2">
          <img src={imgTena2} alt=""/>
          </div>
          <p className="parrafo2">
            Este sitio web está diseñado especialmente para ti, dueño o
            administrador de un negocio
          </p>
          <p className="parrafos-inferiores">
            Sabemos lo importante que es para ti conocer los beneficios que los
            productos que comercializas pueden ofrecer a tus clientes
          </p>
          <p className="parrafos-inferiores">
            Te hablaremos de una manera sencilla y clara sobre las
            características de nuestros productos, pero sobre todo como puedes
            potencializar tu negocio y hacer crecer tus ganancias con las marcas
            de Essity, en tu negocio.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Nosotros;
