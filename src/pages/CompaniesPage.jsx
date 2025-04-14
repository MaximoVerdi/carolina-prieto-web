import React from 'react';

const companies = [
  {
    id: 1,
    name: 'TechCorp Industries',
    logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Chevrolet-Logo-2010.png',
    description: 'Líder en soluciones tecnológicas empresariales.',
    project: 'Stand Corporativo para Feria Internacional de Tecnología',
    year: '2024',
  },
  {
    id: 2,
    name: 'Galería de Arte Moderna',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png',
    description: 'Espacio de exhibición de arte contemporáneo.',
    project: 'Diseño de Exposición Temporal',
    year: '2023',
  },
  {
    id: 3,
    name: 'InnovaTech Solutions',
    logo: 'https://lh6.googleusercontent.com/proxy/pabDN4Ik-KospQyudGlZuhETfXFwDxtvYf0RHIIHoY4tlnEPqZl-45brxbJeggXvM8PT_TypydLJktW_ACaBy4imDWs',
    description: 'Desarrollo de software y soluciones digitales.',
    project: 'Stand Interactivo para Conferencia Tech',
    year: '2024',
  },
  {
    id: 4,
    name: 'Retail Moderna',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Grupo_arcor_logo.svg/2560px-Grupo_arcor_logo.svg.png',
    description: 'Cadena de tiendas de moda y lifestyle.',
    project: 'Pop-up Store Concepto',
    year: '2023',
  },
  {
    id: 5,
    name: 'Arte & Diseño',
    logo: 'https://davitautomotores.com.ar/wp-content/uploads/2019/12/Logo-Sancor-Seguros-2.png',
    description: 'Estudio de diseño y galería de arte.',
    project: 'Exposición Multimedia',
    year: '2024',
  },
  {
    id: 6,
    name: 'Farmacéutica Plus',
    logo: 'https://framerusercontent.com/assets/EUOqtLCGhs1vkiC5NVdedA1J1RQ.png',
    description: 'Investigación y desarrollo farmacéutico.',
    project: 'Stand para Congreso Médico',
    year: '2023',
  },
];

const CompaniesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Nuestros Clientes
          </h1>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-16">
            Colaboramos con empresas líderes en diversos sectores, creando espacios únicos que potencian su presencia en eventos y exposiciones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div key={company.id} className="p-6  hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-44 h-32 max-w-60 content-fit object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {company.name}
                </h3>
                <p className="text-neutral-600 text-center mb-4">
                  {company.description}
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-neutral-500">
                    <strong>Último Proyecto:</strong> {company.project}
                  </p>
                  <p className="text-sm text-neutral-500">
                    <strong>Año:</strong> {company.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;