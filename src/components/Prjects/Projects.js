import React from 'react';

const projects = [
  {
    src: '/images/proyectoLanding_icon.png',
    title: 'Landing de Ventas',
    description: 'HTML-CSS',
    demoLink: 'https://faofaofao.github.io/Proyecto1Landing/',
    repoLink: 'https://github.com/faofaofao/Proyecto1Landing?tab=readme-ov-file',
  },
  {
    src: '/images/proyectoCrud_icon.png',
    title: 'CRUD',
    description: 'HTML-CSS-JS',
    demoLink: 'https://faofaofao.github.io/Proyecto2CRUD/',
    repoLink: 'https://github.com/faofaofao/Proyecto2CRUD?tab=readme-ov-file',
  },
  {
    src: '/images/proyectoDashboard_icon.png',
    title: 'DASHBOARD',
    description: 'HTML-CSS-JS-NODEJS',
    demoLink: 'https://faofaofao.github.io/Dashboard_03/',
    repoLink: 'https://github.com/faofaofao/Dashboard_03',
  },
  {
    src: '/images/proyectoRestauranteApp_icon.png',
    title: 'RestauranteAPP',
    description: 'HTML-CSS-TAILWIND-JS-NODEJS-EXPRESSJS-REACT-VITE-FIREBASE',
    demoLink: 'https://proyecto-restaurant-app-six.vercel.app/',
    repoLink: 'https://github.com/faofaofao/Proyecto_rastaurante_APP',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-[#EDF2F4]">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#2B2D42]">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#8D99AE] p-6 rounded-2xl border border-[#2B2D42] border-opacity-20 shadow-md flex flex-col items-center"
          >
            <img
              src={project.src}
              alt={project.title}
              className="h-60 w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2 text-[#2B2D42] text-center">{project.title}</h3>
            <p className="text-[#EDF2F4] mb-4 text-center">{project.description}</p>
            <div className="flex justify-center gap-4 w-full">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                DEMO
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
              >
                REPO
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
