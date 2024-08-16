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
  <section id="projects" className="py-20 bg-[#2B3A36]"> {/* Fondo igual al componente Skills */}
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#A3D9C9]"> {/* Texto con el mismo color que el título de Skills */}
        Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#354F45] p-6 rounded-2xl border border-[#587D6E] shadow-md flex flex-col items-center" /* Fondo más oscuro y bordes más claros */
          >
            <img
              src={project.src}
              alt={project.title}
              className="h-60 w-full object-cover mb-4 rounded-lg border-2 border-[#5C8A76]" /* Borde de la imagen */
            />
            <h3 className="text-xl font-bold mb-2 text-[#A3D9C9] text-center"> {/* Título del proyecto con color similar al de Skills */}
              {project.title}
            </h3>
            <p className="text-[#C3DED9] mb-4 text-center"> {/* Descripción con un color claro que armoniza con el fondo */}
              {project.description}
            </p>
            <div className="flex justify-center gap-4 w-full">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4CAF50] text-[#FFFFFF] px-6 py-3 rounded-md shadow-lg hover:bg-[#45A049] transition-colors duration-300" /* Botón DEMO con tonalidades más visibles */
              >
                DEMO
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2196F3] text-[#FFFFFF] px-6 py-3 rounded-md shadow-lg hover:bg-[#1976D2] transition-colors duration-300" /* Botón REPO con tonalidades más visibles */
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
