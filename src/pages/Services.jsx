
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const services = [
  {
    id: 1,
    title: "Diseño de Stands",
    description:
      "Creamos stands únicos que reflejan la identidad de tu marca y maximizan el impacto en ferias y exposiciones.",
    features: [
      "Diseño personalizado",
      "Optimización del espacio",
      "Integración de marca",
      "Soluciones innovadoras",
    ],
  },
  {
    id: 2,
    title: "Visualización 3D",
    description:
      "Desarrollamos renders fotorrealistas que te permiten visualizar tu stand antes de su construcción.",
    features: [
      "Renders de alta calidad",
      "Recorridos virtuales",
      "Diferentes perspectivas",
      "Ajustes en tiempo real",
    ],
  },
  {
    id: 3,
    title: "Gestión de Proyecto",
    description:
      "Nos encargamos de todo el proceso, desde el diseño inicial hasta la instalación final.",
    features: [
      "Coordinación completa",
      "Supervisión de construcción",
      "Control de calidad",
      "Gestión de proveedores",
    ],
  },
];

function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-light mb-12 text-center"
      >
        Nuestros Servicios
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="service-card bg-white p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-medium mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="w-full">
                Solicitar Información
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-light mb-6">¿Necesitas un Presupuesto?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Podemos ayudarte a crear el stand perfecto para tu próximo evento.
          Contáctanos para discutir tu proyecto y recibir un presupuesto
          personalizado.
        </p>

      </div>
    </div>
  );
}

export default Services;
