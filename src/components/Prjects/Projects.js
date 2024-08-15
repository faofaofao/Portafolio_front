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
  <section id="projects" className="py-20 bg-[#453A30]"> {/* Fondo del componente con tonalidad de #2B2118 */}
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#F4EDE8]"> {/* Texto con tonalidad clara de #2B2118 */}
        Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2B2118] p-6 rounded-2xl border border-[#5A483D] shadow-md flex flex-col items-center" /* Fondo oscuro, bordes y sombras más claras */
          >
            <img
              src={project.src}
              alt={project.title}
              className="h-60 w-full object-cover mb-4 rounded-lg border-2 border-[#7C6654]" /* Borde de la imagen */
            />
            <h3 className="text-xl font-bold mb-2 text-[#F4EDE8] text-center"> {/* Título del proyecto con color claro */}
              {project.title}
            </h3>
            <p className="text-[#D3C6B5] mb-4 text-center"> {/* Descripción con color más claro */}
              {project.description}
            </p>
            <div className="flex justify-center gap-4 w-full">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6E5542] text-[#F4EDE8] px-4 py-2 rounded-md hover:bg-[#7C6654]" /* Botón DEMO con tonalidades de #2B2118 */
              >
                DEMO
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A3A31] text-[#F4EDE8] px-4 py-2 rounded-md hover:bg-[#5A483D]" /* Botón REPO con tonalidades más oscuras */
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
