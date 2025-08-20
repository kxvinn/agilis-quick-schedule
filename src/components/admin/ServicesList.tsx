
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface Service {
  id: number;
  nome: string;
  duracao: string;
  preco: string;
}

const initialServices: Service[] = [
  {
    id: 1,
    nome: "Haircut",
    duracao: "30 min",
    preco: "$25"
  },
  {
    id: 2,
    nome: "Hair Coloring",
    duracao: "90 min",
    preco: "$120"
  },
  {
    id: 3,
    nome: "Beard Trim",
    duracao: "15 min",
    preco: "$15"
  },
  {
    id: 4,
    nome: "Full Treatment",
    duracao: "120 min",
    preco: "$150"
  }
];

const ServicesList = () => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newService, setNewService] = useState({
    nome: "",
    duracao: "",
    preco: ""
  });
  
  const handleAddService = () => {
    if (newService.nome && newService.duracao && newService.preco) {
      setServices([
        ...services,
        {
          id: services.length + 1,
          nome: newService.nome,
          duracao: newService.duracao,
          preco: newService.preco
        }
      ]);
      setNewService({ nome: "", duracao: "", preco: "" });
      setShowAddForm(false);
    }
  };
  
  const handleDeleteService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <Card className="animate-fade-in dark:bg-zinc-950">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Serviços</CardTitle>
        <Button 
          size="sm" 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-agilis-accent hover:bg-agilis-accent/90"
        >
          <Plus className="mr-1 h-4 w-4" />
          Adicionar Serviço
        </Button>
      </CardHeader>
      <CardContent>
        {showAddForm && (
          <div className="mb-6 p-4 border bg-gray-200 dark:bg-zinc-900 border-gray-200 rounded-md bg-gray-50">
            <h3 className="text-sm font-medium mb-4">Add New Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input
                placeholder="Nome do serviço"
                value={newService.nome}
                className="dark:bg-zinc-950"
                onChange={(e) => setNewService({...newService, nome: e.target.value})}
              />
              <Input
                placeholder="Duração (e.g. 30 min)"
                value={newService.duracao}
                className="dark:bg-zinc-950"

                onChange={(e) => setNewService({...newService, duracao: e.target.value})}
              />
              <Input
                placeholder="Preço (e.g. $25)"
                value={newService.preco}
                className="dark:bg-zinc-950"

                onChange={(e) => setNewService({...newService, preco: e.target.value})}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm" onClick={() => setShowAddForm(false)}>
                Cancelar
              </Button>
              <Button 
                size="sm" 
                onClick={handleAddService}
                className="bg-agilis-accent hover:bg-agilis-accent/90"
              >
                Adicionar Serviço
              </Button>
            </div>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Serviço</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Duração</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Preço</th>
                <th className="text-right py-3 px-8 text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-900 duracao-200 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium">{service.nome}</td>
                  <td className="py-3 px-4 text-sm">{service.duracao}</td>
                  <td className="py-3 px-4 text-sm">{service.preco}</td>
                  <td className="py-3 px-5 text-sm text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      Deletar
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
