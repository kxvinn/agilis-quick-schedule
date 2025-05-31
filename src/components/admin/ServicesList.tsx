
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
}

const initialServices: Service[] = [
  {
    id: 1,
    name: "Haircut",
    duration: "30 min",
    price: "$25"
  },
  {
    id: 2,
    name: "Hair Coloring",
    duration: "90 min",
    price: "$120"
  },
  {
    id: 3,
    name: "Beard Trim",
    duration: "15 min",
    price: "$15"
  },
  {
    id: 4,
    name: "Full Treatment",
    duration: "120 min",
    price: "$150"
  }
];

const ServicesList = () => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newService, setNewService] = useState({
    name: "",
    duration: "",
    price: ""
  });
  
  const handleAddService = () => {
    if (newService.name && newService.duration && newService.price) {
      setServices([
        ...services,
        {
          id: services.length + 1,
          name: newService.name,
          duration: newService.duration,
          price: newService.price
        }
      ]);
      setNewService({ name: "", duration: "", price: "" });
      setShowAddForm(false);
    }
  };
  
  const handleDeleteService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Services</CardTitle>
        <Button 
          size="sm" 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-agilis-accent hover:bg-agilis-accent/90"
        >
          <Plus className="mr-1 h-4 w-4" />
          Add Service
        </Button>
      </CardHeader>
      <CardContent>
        {showAddForm && (
          <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
            <h3 className="text-sm font-medium mb-4">Add New Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input
                placeholder="Service name"
                value={newService.name}
                onChange={(e) => setNewService({...newService, name: e.target.value})}
              />
              <Input
                placeholder="Duration (e.g. 30 min)"
                value={newService.duration}
                onChange={(e) => setNewService({...newService, duration: e.target.value})}
              />
              <Input
                placeholder="Price (e.g. $25)"
                value={newService.price}
                onChange={(e) => setNewService({...newService, price: e.target.value})}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
              <Button 
                size="sm" 
                onClick={handleAddService}
                className="bg-agilis-accent hover:bg-agilis-accent/90"
              >
                Add Service
              </Button>
            </div>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Service</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Duration</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Price</th>
                <th className="text-right py-3 px-8 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-gray-100 hover:bg-zinc-900 duration-200 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium">{service.name}</td>
                  <td className="py-3 px-4 text-sm">{service.duration}</td>
                  <td className="py-3 px-4 text-sm">{service.price}</td>
                  <td className="py-3 px-5 text-sm text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesList;
