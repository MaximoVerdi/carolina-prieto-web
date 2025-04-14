import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {


    return (
        <footer className="bg-white text-gray-900 mt-20 border-t">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm opacity-80">
              Copyright © {new Date().getFullYear()} Carolina Prieto - Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@carolinaprieto.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;