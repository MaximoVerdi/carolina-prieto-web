import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-gray-900 border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-sm font-medium tracking-wide">
            CAROLINA PRIETO
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/projects" className="text-sm hover:text-gray-600 transition-colors">
              PROYECTOS
            </Link>
            <Link to="/companies" className="text-sm hover:text-gray-600 transition-colors">
              CLIENTES
            </Link>
            <Link to="/about" className="text-sm hover:text-gray-600 transition-colors">
              NOSOTROS
            </Link> 
            <Link to="/contact" className="text-sm hover:text-gray-600 transition-colors">
              CONTACTO
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/projects" className="block text-sm hover:text-gray-600 transition-colors" onClick={closeMenu}>
                PROYECTOS
              </Link>
              <Link to="/about" className="block text-sm hover:text-gray-600 transition-colors" onClick={closeMenu}>
                NOSOTROS
              </Link>
              <Link to="/contact" className="block text-sm hover:text-gray-600 transition-colors" onClick={closeMenu}>
                CONTACTO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
