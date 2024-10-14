"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 // debo de poner aca mi servicio y mi template de eMAILJS
    emailjs.send('your_service_id', 'your_template_id', {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, 'your_user_id')
      .then((result) => {
        console.log(result.text);
        setAlertMessage("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        setAlertMessage("There was an error sending your message.");
      });

    // Limpiar el formulario después de enviar
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Título de la página */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">
            Contact Me<span className="text-[#FF7A29]">.</span>
          </h1>
          <p className="text-xl text-white/60 mt-4">
            I&apos;m here to help! Feel free to reach out via the contact form or through any of my contact details below.
          </p>
        </div>

        {/* Información de Contacto */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-12">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-3xl text-[#FF7A29]" />
            <div>
              <p className="text-lg font-semibold">Phone</p>
              <a href="tel:+1234567890" className="hover:underline">
                +57 3008735048
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-[#FF7A29]" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <a href="mailto:barreram.n@javeriana.edu.co" className="hover:underline">
                barreram.n@javeriana.edu.co
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-3xl text-[#FF7A29]" />
            <div>
              <p className="text-lg font-semibold">Location</p>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-[#232329] p-8 rounded-lg shadow-lg max-w-[600px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Send Me a Message<span className="text-[#FF7A29]">!</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#27272c] text-white border border-white/10"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#27272c] text-white border border-white/10"
                required
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 rounded-lg bg-[#27272c] text-white border border-white/10"
                required
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#FF7A29] hover:bg-[#ff8b42] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Mensaje de Alerta */}
          {alertMessage && <p className="text-center mt-4 text-lg">{alertMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
