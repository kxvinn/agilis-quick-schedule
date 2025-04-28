
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={heroRef} 
          className="max-w-4xl mx-auto text-center transition-all duration-700 opacity-0 translate-y-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-agilis-dark mb-6">
          Agende com facilidade. <span className="text-agilis-accent">Cresça com eficiência.</span> 
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Ajude seus clientes a agendar consultas com apenas alguns cliques. Sem ligações, sem e-mails, apenas simplicidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-agilis-accent text-white hover:bg-agilis-accent/90 text-lg px-8 btn-hover">
                Comece de graça
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="#how-it-works">
              <Button variant="outline" size="lg" className="text-lg px-8 btn-hover">
                Veja como funciona
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
