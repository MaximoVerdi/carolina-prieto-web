
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-light mb-12 text-center"
      >
        Contacto
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-medium mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full ">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-medium">+54 11 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">contacto@carolinaprieto.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full ">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-medium">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-6">Horario de Atención</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Lunes - Viernes</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Sábados</span>
                <span>10:00 - 14:00</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg p-3 bg-neutral-800"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-lg p-3 bg-neutral-800"
                placeholder="nombre@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                className="w-full border rounded-lg p-3 bg-neutral-800"
                placeholder="+54 11 1234 5678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Mensaje
              </label>
              <textarea
                required
                rows={4}
                className="w-full border rounded-lg p-3 bg-neutral-800"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <Button type="submit" className="w-full  bg-stone-100">
              Enviar Mensaje
              <Send className="ml-2 h-4 w-4 " />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
