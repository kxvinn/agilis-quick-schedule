
import React from 'react';
import { Calendar, Clock, Users, Star, BadgeDollarSign, Package, PackagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-agilis-accent" />,
    title: "Simple Scheduling",
    description: "Allow clients to book appointments with your business in just a few clicks, no back-and-forth emails needed."
  },
  {
    icon: <Clock className="h-10 w-10 text-agilis-accent" />,
    title: "Time Management",
    description: "Set your availability and let clients book only when you're free. Automatic timezone detection included."
  },
  {
    icon: <Users className="h-10 w-10 text-agilis-accent" />,
    title: "Client Management",
    description: "Keep track of your clients and their appointment history all in one place."
  }
];

const pricingPlans = [
  {
    title: "Free Plan",
    price: "R$ 0",
    description: "Basic scheduling for small businesses just getting started",
    icon: <Package className="h-12 w-12 text-agilis-accent mb-4" />,
    features: [
      "Up to 20 appointments per month",
      "WhatsApp notifications",
      "Basic client management",
      "Manual calendar sync"
    ],
    buttonText: "Get Started Free",
    buttonLink: "/signup",
    highlighted: false
  },
  {
    title: "Premium Plan",
    price: "R$ 99/month",
    description: "Advanced features for growing businesses",
    icon: <BadgeDollarSign className="h-12 w-12 text-agilis-accent mb-4" />,
    features: [
      "Unlimited appointments",
      "Custom branding",
      "Advanced analytics",
      "Multiple staff accounts",
      "Automatic calendar sync",
      "Priority support"
    ],
    buttonText: "Start 14-day Trial",
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
            Everything you need to manage appointments
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Agilis gives you all the tools to streamline your booking process
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
              Choose the plan that's right for you
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start for free and upgrade as your business grows
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
                    Recommended
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
                      ? 'bg-agilis-accent text-white hover:bg-agilis-accent/90' 
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
