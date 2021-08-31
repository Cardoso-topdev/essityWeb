import React, { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [form, setForm] = useState([]);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.className);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://admin.creceminegocio.mx/api/sendmail",
      form,
      headers
    );
    console.log(data);
  };
  return (
    <div className="container mb-5">
      <form className="form-contacto" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <div class="row">
              <div className="col-6">
                <label>Nombre completo</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div className="col-6">
                <label>Correo electronico</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Eg. your text here"
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Telefono</label>
                <input
                  className="form-control"
                  type="tel"
                  name="telefono"
                  placeholder="Eg. your text here"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 mt-3">
                <label>Comentarios o dudas</label>
                <textarea
                  className="form-control"
                  name="contenido"
                  placeholder="Eg. your text here"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <input type="submit" className="btn btn-contacto" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
