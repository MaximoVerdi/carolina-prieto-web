import React from 'react';
import { Link } from 'react-router-dom';

const companies = [
  {
    id: 1,
    name: 'TechCorp Industries',
    logo: 'https://logowik.com/content/uploads/images/mercado-libre8717.logowik.com.webp',
  },
  {
    id: 2,
    name: 'Galería de Arte Moderna',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png',
  },
  {
    id: 3,
    name: 'InnovaTech Solutions',
    logo: 'https://lh6.googleusercontent.com/proxy/pabDN4Ik-KospQyudGlZuhETfXFwDxtvYf0RHIIHoY4tlnEPqZl-45brxbJeggXvM8PT_TypydLJktW_ACaBy4imDWs',
  },
  {
    id: 4,
    name: 'Retail Moderna',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Grupo_arcor_logo.svg/2560px-Grupo_arcor_logo.svg.png',
  },
  {
    id: 5,
    name: 'Arte & Diseño',
    logo: 'https://davitautomotores.com.ar/wp-content/uploads/2019/12/Logo-Sancor-Seguros-2.png',
  },
  {
    id: 6,
    name: 'Farmacéutica Plus',
    logo: 'https://framerusercontent.com/assets/EUOqtLCGhs1vkiC5NVdedA1J1RQ.png',
  },
  {
    id: 6,
    name: 'Farmacéutica Plus',
    logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Chevrolet-Logo-2010.png',
  },
  {
    id: 6,
    name: 'Farmacéutica Plus',
    logo: 'https://1000marcas.net/wp-content/uploads/2020/03/logo-Ray-Ban.png',
  },
];

const Companies = () => {
  const duplicated = [...companies, ...companies, ...companies];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Colaboramos con empresas líderes en diversos sectores, creando espacios que impulsan su presencia en el mercado.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {duplicated.map((company, index) => (
              <div key={index} className="flex-shrink-0 p-4 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-28 h-24 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/companies"
            className="inline-block bg-neutral-900 text-white px-6 py-2 rounded-sm hover:bg-neutral-800 transition-colors" 
          >
            Ver Todas las Empresas
          </Link>
        </div>
      </div>

      {/* Animación */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Companies;
