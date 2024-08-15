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
  const [successMessage, setSuccessMessage] = useState(''); // Nuevo estado para el mensaje de éxito

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
      const response = await axios.post(`https://portafolio-back-p2nb.onrender.com/api/contact`, formData);
      console.log(response.data);

      // Reset form and messages
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrorMessage('');
      setSuccessMessage('Mensaje enviado con éxito'); // Mensaje de éxito
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrorMessage('Error en el envío del formulario');
      setSuccessMessage(''); // Limpia el mensaje de éxito en caso de error
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#2D3748]"> {/* Fondo oscuro */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#F7FAFC]">
          Contáctame
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-[#1A202C] shadow-lg rounded-lg border border-gray-700">
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#E2E8F0] text-lg mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#2D3748] text-[#F7FAFC] focus:bg-[#2D3748] focus:border-blue-500 focus:ring-0"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#E2E8F0] text-lg mb-2">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#2D3748] text-[#F7FAFC] focus:bg-[#2D3748] focus:border-blue-500 focus:ring-0"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-[#E2E8F0] text-lg mb-2">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#2D3748] text-[#F7FAFC] focus:bg-[#2D3748] focus:border-blue-500 focus:ring-0"
              placeholder="Asunto del mensaje"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#E2E8F0] text-lg mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#2D3748] text-[#F7FAFC] focus:bg-[#2D3748] focus:border-blue-500 focus:ring-0"
              placeholder="Tu mensaje"
              rows="5"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-300 transition-colors"
            >
              Enviar
            </button>
          </div>
          {successMessage && <p className="text-green-400 mt-4 text-center">{successMessage}</p>}
          {errorMessage && <p className="text-red-400 mt-4 text-center">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
