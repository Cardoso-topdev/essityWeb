import React, { Fragment } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

//resources
import img190 from "../assets/img/img190.jpg";
import img191 from "../assets/img/img191.jpg";
import img192 from "../assets/img/img192.jpg";
const Crece = () => {
  return (
    <Fragment>
      <Navbar />
      <section>
        <div className="section-crece">
          <div className="container crece-hero">
            <h1>Crece mi negocio</h1>
            <div className="segunda-columna">
              <h2>Protección femenina</h2>
              <p>
                Categoría que se consume hoy en México porque está en 95 de cada
                100 hogares. Es una categoría con un margen de utilidad muy
                atractivo. Las usuarias buscan estos productos en las tiendas
                (buscar información en INEGI)..
              </p>
            </div>
          </div>
        </div>

        <div className="container container-blogs">
          <div className="card-blog">
            <img src={img190} />
            <div>
              <h3 className="mb-4">Incontinencia para adulto (Tena)</h3>
              <p>
                Padecimiento más común de lo normal. Cada vez hay más adultos en
                el país. El portafolio que satisfase todas las necesidades de la
                población. Es una categoría con un margen de utilidad muy
                atractivo.
              </p>
            </div>
          </div>

          <div className="card-blog">
            <img src={img191} />
            <div>
              <h3 className="mb-4">Papel de baño</h3>
              <p>
                (Regio) Portafolio que responde a las necesidades de todos tus
                clientes. Cuenta con promociones para beneficio de tu negocio.
                Es una marca que podrás encontrar con facilidad con cualquiera
                de tus proveedores.
              </p>
            </div>
          </div>

          <div className="card-blog">
            <img src={img192} />
            <div>
              <h3 className="mb-4">Toalla de cocina</h3>
              <p>
                Cada vez más personas utilizan toalla de cocina en lugar de
                servilletas. El precio es accesible (Regio). La toalla de cocina
                te permite satisfacer diferentes necesidades (secar, limpiar,
                desengrasar).
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Crece;