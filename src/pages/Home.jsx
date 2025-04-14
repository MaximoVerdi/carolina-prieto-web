import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import Companies from "@/components/ui/companies";
import { Button } from "@/components/ui/button";
import { Check, Send, Star } from "lucide-react";

function Home() {
  const [selectedType, setSelectedType] = useState(null);
  const budgetTypes =
  [
    {
      id: "diseno-proyecto",
      title: "Diseño y Proyecto Arquitectónico",
      description: "Propuesta creativa y técnica para dar forma a tu idea.",
      features: [
        "Diseño personalizado según necesidades y estilo",
        "Planos técnicos completos",
        "Renders 3D realistas para visualizar el proyecto",
        "Selección de materiales y acabados sugeridos",
      ],
    },
    {
      id: "direccion-obra",
      title: "Dirección y Supervisión de Obra",
      description: "Seguimiento integral para asegurar calidad y cumplimiento.",
      features: [
        "Supervisión de obra en todas sus etapas",
        "Coordinación con contratistas y gremios",
        "Control de costos y cronograma",
        "Reportes periódicos al cliente",
      ],
    },
    {
      id: "asesoramiento-reformas",
      title: "Asesoramiento y Reformas",
      description: "Optimización de espacios existentes con soluciones funcionales.",
      features: [
        "Evaluación del estado actual del espacio",
        "Propuestas de reforma adaptadas al presupuesto",
        "Mejoras funcionales y estéticas",
        "Ideas para viviendas, oficinas o locales comerciales",
      ],
    },
  ];
  
    
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <img
          src="https://www.lobostudio.es/wp-content/uploads/2022/11/render-exterior-R01-1-2048x1152-1.jpg"
          alt="Modern architectural stand design"
          className="absolute inset-0 w-full h-full object-cover brightness-100"
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="flex justify-center container mx-auto px-4 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
            >
            <span className="font-light text-xl border-2 rounded-full border-neutral-200 px-4 py-1">Arquitecta y diseñadora</span>  
            <h1 className="text-5xl md:text-6xl mb-2 font-medium mt-4">Carolina Prieto</h1>
            <p className="text-xl mb-8 text-white/90 mt-4">
              Creamos espacios únicos que destacan tu marca y cautivan a tu audiencia.
            </p>
            <Link to="/projects">
              <Button className="border-none bg-white text-gray-900 hover:bg-white/90 border">
                Ver Proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects
      <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light mb-12 text-center text-white">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {[
        {
          title: "Stand Tecnológico",
          description: "Diseño moderno para empresa de tecnología",
          image: "https://images.unsplash.com/photo-1524463595821-0b0752f79daf",
          },
          {
            title: "Espacio Corporativo",
            description: "Stand elegante para presentación corporativa",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
            },
            {
              title: "Stand Comercial",
              description: "Diseño innovador para marca de retail",
              image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
              },
              ].map((project, index) => (
                <motion.div
                key={`project-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="project-card group  cursor-pointer"
                >
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
                />
                <div className="project-card-overlay">
                <div className="text-center text-white">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.description}</p>
                <Link to="/projects" className="inline-block mt-4 text-white text-sm hover:underline">
                Ver Proyecto
                </Link>
                </div>
                </div>
                </motion.div>
                ))}
                </div>
                </div>
                </section> */}

      <Projects />

      <Companies />
      
      {/* Services Preview */}
      <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-4xl font-light mb-12 text-center text-gray-200">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {budgetTypes.map((type, index) => (
            <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative border rounded-lg p-6 cursor-pointer transition-all pt-8 ${
              selectedType === type.id
              ? "border-white shadow-lg"
              : "hover:border-gray-400"
            } ${
              type.recommended
              ? "scale-105 shadow-xl border-2 border-white bg-opacity-10 backdrop-blur-sm"
              : ""
            }`}
            onClick={() => setSelectedType(type.id)}
            >
              <h3 className="text-xl font-medium mb-2">{type.title}</h3>
              <p className="text-gray-400 mb-4">{type.description}</p>
              <ul className="space-y-2 mb-6">
                {type.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-white">¿Listo para destacar?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Permítenos ayudarte a crear un espacio que refleje la esencia de tu marca
            y cautive a tu audiencia.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-gray-900 hover:bg-white/90 border">
              Contactar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
