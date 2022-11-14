import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState("");

  return (
    <div>
      <h1>¡Contactanos!</h1>
      <section className="formContainer">
        <form
          className="formulario"
          id="formulario"
          onSubmit={(e) => {
            e.preventDefault();
            setName(e.target.name.value);
            setEmail(e.target.email.value);
            setMessage(e.target.message.value);
            setMessageSent("¡Mensaje enviado!");
            console.log(e.target.name.value);
            console.log(e.target.email.value);
            console.log(e.target.message.value);
            e.target.reset();
          }}
        >
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            placeholder="Ingresá tu nombre"
            onChange={(e) => setMessageSent("")}
            required
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="tuemail@mail.com"
            onChange={(e) => setMessageSent("")}
            required
          />
          <legend>Escribí acá tu mensaje:</legend>
          <textarea
            name="message"
            cols="90"
            rows="10"
            placeholder="(Campo obligatorio)"
            onChange={(e) => setMessageSent("")}
            required
          ></textarea>
          <button type="submit" className="button">
            Enviar
          </button>
        </form>
      </section>
      <div className="printResults">
        <h2>{messageSent}</h2>
        <h3>Resumen de datos enviados</h3>
        <p>Nombre: {name}</p>
        <p>Email: {email}</p>
        <p>Mensaje: {message}</p>
      </div>
    </div>
  );
};

export default Form;
