
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-agilis-accent/10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-agilis-dark mb-6">
            Pronto para simplificar seu agendamento?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Junte-se a milhares de empresas que usam o Agilis para economizar tempo e encantar seus clientes.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-agilis-accent text-white hover:bg-agilis-accent/90 text-lg px-8 btn-hover">
              Comece gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-gray-600">Não é necessário cartão de crédito.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
