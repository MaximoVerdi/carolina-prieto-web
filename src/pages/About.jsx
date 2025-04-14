
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-light mb-12 text-center"
      >
        Nosotros
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg mx-auto mb-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            En Carolina Prieto Arquitectura nos especializamos en la creación de espacios
            únicos que transforman la manera en que las marcas se presentan al mundo.
            Con más de una década de experiencia en el diseño de stands, hemos desarrollado
            un profundo entendimiento de cómo crear espacios que no solo cautivan
            visualmente, sino que también generan experiencias memorables.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Nuestro enfoque se centra en la fusión perfecta entre estética y
            funcionalidad, creando diseños que reflejan la identidad de cada marca
            mientras optimizan el espacio para maximizar el impacto y la interacción
            con los visitantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Diseño de Stands",
              description:
                "Creamos stands únicos que reflejan la identidad de tu marca y maximizan el impacto en ferias y exposiciones.",
            },
            {
              title: "Visualización 3D",
              description:
                "Desarrollamos renders fotorrealistas que te permiten visualizar tu stand antes de su construcción.",
            },
            {
              title: "Gestión de Proyecto",
              description:
                "Nos encargamos de todo el proceso, desde el diseño inicial hasta la instalación final.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 shadow-sm"
            >
              <h2 className="text-2xl font-medium mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className=" p-12 text-center">
          <h2 className="text-3xl font-light mb-6">¿Listo para crear algo único?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Permítenos ayudarte a crear un espacio que refleje la esencia de tu marca
            y cautive a tu audiencia.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contactar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
