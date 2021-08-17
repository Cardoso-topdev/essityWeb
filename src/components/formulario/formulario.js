import React from "react";


const Formulario = () => {
  return (
    <div className="container mb-5">
      <form className="form-contacto">
        <div className="row">
          <div className="col-10">
            <div class="row">
              <div className="col-6">
                <label>Nombre completo</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  placeholder="Eg. your text here"
                />
              </div>
            </div>
            <div class="row">
              <div className="col-6">
                <label>Correo electronico</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Eg. your text here"
                />
              </div>
              <div className="col-6">
                <label>Telefono</label>
                <input
                  className="form-control"
                  type="tel"
                  name="tel"
                  placeholder="Eg. your text here"
                />
              </div>
              <div className="col-12">
                <label>Comentarios o dudas</label>
                <textarea
                  className="form-control"
                  placeholder="Eg. your text here"
                ></textarea>
              </div>
            </div>
            <input type="submit" className="btn btn-contacto"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
