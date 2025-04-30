
import React from 'react';
import { Calendar, Clock, Users, Star, BadgeDollarSign, Package, PackagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-agilis-accent" />,
    title: "Agendamento Simples",
    description: "Permita clientes agendar suas próprias reservas com o seu negócio em poucos cliques e sem necessidade de e-mail."
  },
  {
    icon: <Clock className="h-10 w-10 text-agilis-accent" />,
    title: "Gestão de Tempo",
    description: "Configure sua disponibilidade e deixe clientes reservarem somente quando você estiver disponível. Rápido. Eficaz."
  },
  {
    icon: <Users className="h-10 w-10 text-agilis-accent" />,
    title: "Gestão de Clientes",
    description: "Fique conectado com seus clientes e seus históricos de reservas tudo em um só lugar."
  }
];

const pricingPlans = [
  {
    title: "Plano Gratuito",
    price: "",
    description: "Programação básica para pequenas empresas que estão começando.",
    icon: <Package className="h-12 w-12 text-agilis-accent mb-4" />,
    features: [
      "Até 20 notificações por mês",
      "Notificações de WhatsApp",
      "Gestão básica de clientes",
      "Sincronização manual de calendário"
    ],
    buttonText: "Comece de graça",
    buttonLink: "/signup",
    highlighted: false
  },
  {
    title: "Plano Premium ",
    price: "R$ 19,90/mês",
    description: "Recursos avançados para empresas que querem escalar seu negócio sem preocupações.",
    icon: <BadgeDollarSign className="h-12 w-12 text-agilis-accent mb-4" />,
    features: [
      "Notificações ilimitadas",
      "Marca personalizada",
      "Análise Avançada",
      "Múltiplas contas de administração",
      "Sincronização automática com o calendário",
      "Suporte com Prioridade"
    ],
    buttonText: "Experimente 14 dias gratuitamente",
    buttonLink: "/signup",
    highlighted: true
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agilis-dark dark:text-white mb-4">
            Tudo o que você precisa para gerenciar agendamentos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Agilis te dá todas as ferramentas necessárias para simplificar seu processo de reserva
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-agilis-light dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm card-hover animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-agilis-dark dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agilis-dark dark:text-white mb-4">
              Escolha o plano que te atenda melhor
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comece gratuitamente e invista quando o seu negócio começar a escalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl animate-fade-in ${
                  plan.highlighted 
                    ? 'bg-agilis-accent/10 dark:bg-agilis-accent/20 border-2 border-agilis-accent relative shadow-lg' 
                    : 'bg-agilis-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-agilis-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recomendado
                  </div>
                )}
                <div className="text-center mb-6">
                  {plan.icon}
                  <h3 className="text-2xl font-bold text-agilis-dark dark:text-white">{plan.title}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-agilis-dark dark:text-white">{plan.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="h-5 w-5 text-agilis-accent mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-agilis-accent text-white hover:bg-agilis-accent/90 dark:text-black' 
                      : 'bg-white dark:bg-gray-700 border border-agilis-accent text-agilis-dark dark:text-white hover:bg-agilis-light/80 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
