import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useKeypress from 'react-use-keypress';

const projectsData = {
  1: {
    title: 'Stand Corporativo Moderno',
    client: 'TechCorp Industries',
    location: 'Buenos Aires, Argentina',
    year: '2024',
    description: 'Un innovador stand corporativo diseñado para maximizar la presencia de marca en ferias tecnológicas. El diseño incorpora elementos modernos con una paleta de colores corporativos y espacios interactivos.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    ],
    features: [
      'Área de presentación para 50 personas',
      'Zona de productos interactiva',
      'Sala de reuniones privada',
      'Iluminación LED personalizada',
      'Pantallas táctiles integradas',
    ],
  },
  2: {
    title: 'Exposición Minimalista',
    client: 'Galería de Arte Moderna',
    location: 'Córdoba, Argentina',
    year: '2023',
    description: 'Una exposición minimalista que destaca las obras de arte contemporáneo. El diseño utiliza espacios limpios y líneas puras para crear un ambiente que no compite con las piezas expuestas.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    ],
    features: [
      'Sistema de iluminación ajustable',
      'Paredes móviles',
      'Espacios de contemplación',
      'Acabados neutros',
      'Circulación fluida',
    ],
  },
  3: {
    title: 'Stand Tecnológico',
    client: 'InnovaTech Solutions',
    location: 'Rosario, Argentina',
    year: '2024',
    description: 'Un stand de alta tecnología diseñado para una empresa líder en software. El espacio integra elementos interactivos y áreas de demostración con un diseño futurista.',
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    ],
    features: [
      'Zona de realidad virtual',
      'Área de demostraciones en vivo',
      'Pantallas LED envolventes',
      'Espacios de networking',
      'Sistema de audio inmersivo',
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useKeypress(['ArrowLeft', 'ArrowRight', 'Escape'], (event) => {
    if (event.key === 'ArrowLeft') {
      previousImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'Escape') {
      setIsFullscreen(false);
    }
  });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
          <Link to="/projects" className="text-neutral-900 hover:underline">
            Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/projects" className="text-neutral-200 hover:text-neutral-900 mb-8 inline-block">
          ← Volver a Proyectos
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div 
              className="relative aspect-w-16 aspect-h-9 mb-8 cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            >
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Vista ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Vista ${index + 1}`}
                  className={`w-full h-24 object-cover cursor-pointer transition-opacity ${
                    currentImageIndex === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Detalles del Proyecto</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-neutral-300">Cliente</dt>
                  <dd className="font-medium">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-neutral-300">Ubicación</dt>
                  <dd className="font-medium">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-neutral-300">Año</dt>
                  <dd className="font-medium">{project.year}</dd>
                </div>
              </dl>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
              <p className="text-neutral-200 leading-relaxed">{project.description}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Características</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-neutral-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-md hover:bg-neutral-800 transition-colors"
              >
                Consultar por un proyecto similar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Gallery */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <button
            onClick={previousImage}
            className="absolute left-4 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Vista ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;