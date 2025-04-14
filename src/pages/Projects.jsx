
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Stand Tecnológico",
    category: "Feria de Tecnología",
    description: "Diseño moderno para empresa de tecnología",
    image: "https://3dojo.com/wp-content/uploads/2020/12/infografia-3d-ojo-madrid2-scaled.jpg"
  },
  {
    id: 2,
    title: "Espacio Corporativo",
    category: "Evento Empresarial",
    description: "Stand elegante para presentación corporativa",
    image: "https://www.lesikarquitectura.com/wp-content/uploads/2024/07/Renders.jpeg"
  },
  {
    id: 3,
    title: "Stand Comercial",
    category: "Feria de Retail",
    description: "Diseño innovador para marca de retail",
    image: "https://www.coachingarquitectos.com/wp-content/uploads/2019/06/render-en-arquitectura.jpg"
  },
  {
    id: 4,
    title: "Exposición de Marca",
    category: "Feria Internacional",
    description: "Stand premium para marca de lujo",
    image: "https://behindpictures.com/wp-content/uploads/2022/10/BEHINDPICTES_TOILET.jpg"
  },
  {
    id: 5,
    title: "Stand Interactivo",
    category: "Feria de Innovación",
    description: "Espacio interactivo con tecnología integrada",
    image: "https://scontent.faep32-1.fna.fbcdn.net/v/t39.30808-6/485727197_9001074809998564_3916660796225500117_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HhWOKfrYtQwQ7kNvwEA-NV1&_nc_oc=AdnG3bxEgvJZjN2J8GuDbj4GHu9d-q1cDlAo9JkLf8f18PWd5cL3U67sjnT9wgAyVII&_nc_zt=23&_nc_ht=scontent.faep32-1.fna&_nc_gid=3yy2tF_aUPKrkueFuSs_Cw&oh=00_AfGy6DYeCAeWBApcZZgqtohEDLZNtZxsnGBHqN5_kM00Aw&oe=68005C21"
  },
  {
    id: 6,
    title: "Pabellón de Marca",
    category: "Exposición Nacional",
    description: "Pabellón completo para marca líder",
    image: "https://seccion720.com/wp-content/uploads/2024/09/ARKHAM-1890-3.jpg"
  },
  {
    id: 7,
    title: "Stand Automotriz",
    category: "Salón del Automóvil",
    description: "Espacio dinámico para exhibición de vehículos",
    image: "https://images.unsplash.com/photo-1621685743771-fd5e13734ae6"
  },
  {
    id: 8,
    title: "Stand Gastronómico",
    category: "Feria Gastronómica",
    description: "Diseño funcional para experiencias culinarias",
    image: "https://images.squarespace-cdn.com/content/5f3328d0ad592320797970ed/1680983503836-5233FR9961ECFKBYT5SC/Render+3d+gratis%2C+descargar+render+3d+gratis%2C+render+3d+online%2C+render+inmobiliario%2C+renders+para+inmobiliarias+%281%29.jpg?format=1500w&content-type=image%2Fjpeg"
  },
  {
    id: 9,
    title: "Stand Educativo",
    category: "Feria Educativa",
    description: "Espacio interactivo para instituciones educativas",
    image: "https://www.lobostudio.es/wp-content/uploads/2022/11/render-exterior-R01-1-2048x1152-1.jpg"
  },
  {
    id: 10,
    title: "Stand Médico",
    category: "Congreso Médico",
    description: "Diseño profesional para equipamiento médico",
    image: "https://www.coachingarquitectos.com/wp-content/uploads/2019/06/render-en-arquitectura.jpg"
  },
  {
    id: 11,
    title: "Stand Sustentable",
    category: "Feria Ambiental",
    description: "Diseño eco-friendly con materiales reciclados",
    image: "https://www.gjarquitectura.com/wp-content/uploads/2022/10/renders-vs-realidad-casa-415-marbella_02.jpg"
  },
  {
    id: 12,
    title: "Stand Modular",
    category: "Exposición Modular",
    description: "Sistema modular adaptable a diferentes espacios",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
  },
];

function Projects() {
  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-light mb-12 text-center"
      >
        Nuestros Proyectos
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="project-card"
          >
            <Link to={`/projects/${project.id}`}>
              <img 
                className="w-full h-full object-cover"
                alt={project.title}
                src={project.image}
              />
              <div className="project-card-overlay">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-sm mb-2">{project.category}</p>
                  <p className="text-sm opacity-80">{project.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
