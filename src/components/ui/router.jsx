import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import ProjectDetail from "../../pages/ProjectDetail";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import CompaniesPage from "../../pages/companiesPage";

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
