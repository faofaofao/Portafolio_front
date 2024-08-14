// client/components/Contact.js
import { useState } from 'react';
import axios from 'axios';
const UrlApi = process.env.BACK_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(https://portafolio-back-p2nb.onrender.com/api/contact, formData);
      console.log(response.data);

      // Reset form and error message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrorMessage('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrorMessage('Error en el envío del formulario');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#2D3748]">
          Contáctame
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 text-lg mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 text-lg mb-2">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-800 text-lg mb-2">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Asunto del mensaje"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 text-lg mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tu mensaje"
              rows="5"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Enviar
            </button>
          </div>
          {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;