
import React, { useEffect, useRef } from 'react';
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    description: "Cadastre-se com os dados do seu negócio e defina sua disponibilidade."
  },
  {
    number: "02",
    title: "Compartilhe seu link de reserva",
    description: "Obtenha um link de reserva personalizado para compartilhar com seus clientes."
  },
  {
    number: "03",
    title: "Obtenha reservas",
    description: "Os clientes reservam os horários disponíveis e você recebe notificações."
  }
];

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.step-item');
            steps.forEach((step, index) => {
              setTimeout(() => {
                (step as HTMLElement).classList.add('opacity-100');
                (step as HTMLElement).classList.remove('opacity-0', 'translate-y-10');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }
    
    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agilis-dark mb-4">
            Como o Agilis funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            São apenas três passos para transformar a sua agenda:
          </p>
        </div>
        
        <div ref={stepsRef} className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="step-item flex items-start mb-12 opacity-0 translate-y-10 transition-all duration-700"
            >
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-agilis-accent text-white font-bold">
                  {index < 2 ? step.number : <Check className="h-6 w-6" />}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-agilis-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
