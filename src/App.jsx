import React, { useState, useEffect } from "react";
import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";

import Nav from "@/components/ui/nav";
import Footer from "@/components/footer";
import Router from "./components/ui/router";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-16">
        <Router />
      </main>

      
      <Footer />
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${
          showScrollTop ? "visible" : ""
        } bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all border fixed bottom-6 right-6 z-50`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
