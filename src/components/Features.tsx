
import React from 'react';
import { Calendar, Clock, Users } from "lucide-react";

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

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agilis-dark mb-4">
            Everything you need to manage appointments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Agilis gives you all the tools to streamline your booking process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-agilis-light p-6 rounded-lg border border-gray-100 shadow-sm card-hover animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-agilis-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
