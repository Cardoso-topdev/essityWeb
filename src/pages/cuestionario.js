import React, { Fragment } from "react";
import Footer from "../components/footer/footer";
import Navbar from '../components/navbar/navbar'

const Cuestionario = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="hero-cuestionario">
        <div className="container">
          <h1>Recibe gratis producto de Regio y Saba</h1>
          <p>
            Queremos conocerte más, completa nuestra encuesta de 1 minuto y
            cuéntanos sobre tu negocio. Al enviar el formulario podrás
            participar por un corrugado de Saba Buenas Noches de 14 paquetes con
            8 toallas cada uno completamente gratis. Conoce los términos y
            condiciones dando <span style={{cursor: 'pointer'}} onClick={()=>window.location.href = '/terminos-y-condiciones'}>clic aquí.</span>
          </p>
        </div>
      </div>

      <div className="form-cuestionario container">
        <form action="">
          <div className="checks">
            <label htmlFor="nombre" style={{ fontWeight: "700" }}>
              Nombre y apellido
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="form-control"
              placeholder="Ivon..."
            />
            <label htmlFor="email" style={{ fontWeight: "700" }}>
              Correo
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="correo@correo.com"
            />
          </div>

          <div className="checks">
            <h4>Usualmente donde surtes tu negocio</h4>

            <div className="form-group">
              <input type="checkbox" name="central" id="central" />
              <label htmlFor="central">Central de abastos</label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="mayoreo" id="mayoreo" />
              <label htmlFor="mayoreo">Mayoreo</label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="autoservicio" id="autoservicio" />
              <label htmlFor="autoservicio">Autoservicio del mayoreo</label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="sams" id="sams" />
              <label htmlFor="sams">Sam's Club</label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="bodega" id="bodega" />
              <label htmlFor="bodega">Bodega Aurrera</label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="otro" id="otro" />
              <label htmlFor="otro">Otro</label>
              <input
                type="text"
                name="otro"
                id="otroIn"
                placeholder="Otro..."
                className="otro"
              />
            </div>
          </div>

          <div className="checks">
            <h4>
              En los últimos meses, ¿qué productos consideras ha disminuido la
              venta en tu negocio?
            </h4>

            <div className="form-group">
              <input type="checkbox" name="abarrotes" id="abarrotes" />
              <label htmlFor="abarrotes">
                Abarrotes (enlatados, azúcar, café y tés, cereales, aceites para
                cocinar, etc.)
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="cuidado" id="cuidado" />
              <label htmlFor="cuidado">
                Cuidado personal (papel higiénico, toallas femeninas,
                desodorante, shampoo, etc.)
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="bebidas" id="bebidas" />
              <label htmlFor="bebidas">
                Bebidas (refrescos, cervezas, jugos, etc.)
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="botanas" id="botanas" />
              <label htmlFor="botanas">
                Botanas (papas, frituras, cacahuates, etc.
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="frios" id="frios" />
              <label htmlFor="frios">
                Fríos (helados, paletas, bolsas de hielo, bolis, etc.)
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="frutas" id="frutas" />
              <label htmlFor="frutas">Frutas y verduras</label>
            </div>
          </div>

          <div className="checks">
            <h4>¿Por qué consideras ha disminuido la venta?</h4>

            <div className="form-group">
              <input type="checkbox" name="opcion1" id="opcion1" />
              <label htmlFor="opcion1">Aumento del precio</label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="opcion2" id="opcion2" />
              <label htmlFor="opcion2">
                No cuento con el inventario suficiente por desabasto de mi
                proveedor
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="opcion3" id="opcion3" />
              <label htmlFor="opcion3">
                Mis clientes dejaron de consumir con la misma frecuencia
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="opcion4" id="opcion4" />
              <label htmlFor="opcion4">
                Por las restricciones de la contingencia
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="opcion5" id="opcion5" />
              <label htmlFor="opcion5">
                Fríos (helados, paletas, bolsas de hielo, bolis, etc.)
              </label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="opcion6" id="opcion6" />
              <label htmlFor="opcion6">Frutas y verduras</label>
            </div>
            <div className="form-group">
              <input type="checkbox" name="otro2" id="otro2" />
              <label htmlFor="otro2">Otro</label>
              <input
                type="text"
                name="otro2"
                id="otroIn2"
                placeholder="Otro..."
                className="otro"
              />
            </div>
          </div>
          <p style={{ fontWeight: "700" }}>¡Muchas gracias! </p>
          <div className="text-center">
            <button className="btn btn-enviar">Enviar</button>
          </div>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cuestionario;
