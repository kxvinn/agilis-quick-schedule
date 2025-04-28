
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
}

interface ServiceSelectorProps {
  services: Service[];
  selectedService: number | null;
  onSelectService: (serviceId: number) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  services,
  selectedService,
  onSelectService
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-agilis-dark mb-4">Choose a service</h2>
      <div className="grid gap-3">
        {services.map((service) => (
          <Card 
            key={service.id}
            className={`cursor-pointer transition-all duration-300 hover:border-agilis-accent ${
              selectedService === service.id 
                ? 'border-agilis-accent bg-agilis-accent/5' 
                : 'border-gray-200 hover:shadow-md'
            }`}
            onClick={() => onSelectService(service.id)}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-agilis-dark">{service.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </div>
                <span className="font-medium text-agilis-dark">{service.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;
