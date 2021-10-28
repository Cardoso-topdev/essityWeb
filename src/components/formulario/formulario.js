import React, { useState, useEffect } from "react";
import axios from "axios";
import PopPreguntas from "../popups/Preguntas";
import Error from "../error/mensajeError";
import Swal from "sweetalert2";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    contenido: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [error, mostrarError] = useState(false);
  const { nombre, email, telefono, contenido } = form;

  useEffect(() => {
    if (telefono.length !== 10) {
      document.querySelector("#telefono").classList.add("border-red");
      mostrarError(true);
    } else {
      document.querySelector("#telefono").classList.remove("border-red");
      mostrarError(false);
    }

    if (
      (nombre.trim() !== "" && email.trim() !== "" && telefono.trim() !== "",
      contenido.trim() !== "" && telefono.length === 10)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://admin.creceminegocio.mx/api/sendmail",
        form,
        headers
      );

      if (data.success) {
        setTrigger(true);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal, verifica que tus datos esten correctos',
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mb-5" style={{ position: "relative" }}>
      {error ? <Error /> : null}
      <PopPreguntas trigger={trigger} setTrigger={setTrigger} />;
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
                  id="telefono"
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
            <input
              type="submit"
              className="btn btn-contacto"
              disabled={disabled}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
