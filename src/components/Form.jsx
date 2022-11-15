import { useState } from "react";

const Form = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [date , setBirthDay] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreetAddress] = useState("");
  const [phone, setTelefono] = useState("");
  const [aporte, setObraSocial] = useState("");
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
            setFirstName(e.target.firstname.value);
            setLastName(e.target.lastname.value);
            setDni(e.target.dni.value);
            setBirthDay(e.target.date.value);
            setStreetAddress(e.target.street.value);
            setTelefono(e.target.phone.value);
            setEmail(e.target.email.value);
            setObraSocial(e.target.aporte.value);
            setMessageSent("¡Mensaje enviado!");
            console.log(e.target.firstname.value);
            console.log(e.target.lastname.value);
            console.log(e.target.dni.value);
            console.log(e.target.date.value);
            console.log(e.target.street.value);
            console.log(e.target.phone.value);
            console.log(e.target.email.value);
            console.log(e.target.aporte.value);
            e.target.reset();
          }}
        >
          <label>Nombre/s: </label>
          <input
            type="text"
            name="fistname"
            placeholder="Ingresá tu nombre/s"
            onChange={(e) => setMessageSent("")}
            required
          />

          <label>Apellido/s: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Ingresá tu apellido/s"
            onChange={(e) => setMessageSent("")}
            required
          />

<label>DNI: </label>
          <input
            type="number"
            name="dni"
            placeholder="Ingresá tu DNI"
            onChange={(e) => setMessageSent("")}
            required
          />

<label>F. Nacicimiento: </label>
          <input
            type="date"
            name="date"
            placeholder="Ingresá tu F. Nacimiento"
            onChange={(e) => setMessageSent("")}
            required
          />
          
          <label>Domicilio: </label>
          <input
            type="text"
            name="street"
            placeholder="Ingresá tu Domicilio"
            onChange={(e) => setMessageSent("")}
            required
          />

<label>Teléfono: </label>
          <input
            type="tel"
            name="phone"
            placeholder="Ingresá tu Teléfono"
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
          
          <label>Obra Social: </label>
          <input
            type="text"
            name="aporte"
            placeholder="Ingresá tu Obra Social"
            onChange={(e) => setMessageSent("")}
            required
          />

          <button type="submit" className="button">
            guardar datos
          </button>
        </form>

      </section>
      <div className="printResults">
        <h2>{messageSent}</h2>
        <h3>Resumen de datos enviados</h3>
        <p>Nombre: {firstname}</p>
        <p>Apellido: {lastname}</p>
        <p>DNI: {dni}</p>
        <p>F. Nacimiento: {date}</p>
        <p>Domicilio: {street}</p>
        <p>Teléfono: {phone}</p>
        <p>Email: {email}</p>
        <p>Obra Social: {aporte}</p>
      </div>
    </div>
  );
};

export default Form;





