
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Customer {
  id: number;
  nome: string;
  telefone: string;
  agendamentos: number;
  ultimavisita: string;
}

const customers: Customer[] = [
  {
    id: 1,
    nome: "John Smith",
    telefone: "+1 234 567 8900",
    agendamentos: 12,
    ultimavisita: "2025-04-15"
  },
  {
    id: 2,
    nome: "Sarah Johnson",
    telefone: "+1 234 567 8901",
    agendamentos: 5,
    ultimavisita: "2025-04-22"
  },
  {
    id: 3,
    nome: "Michael Brown",
    telefone: "+1 234 567 8902",
    agendamentos: 8,
    ultimavisita: "2025-04-10"
  },
  {
    id: 4,
    nome: "Emily Davis",
    telefone: "+1 234 567 8903",
    agendamentos: 3,
    ultimavisita: "2025-04-24"
  },
  {
    id: 5,
    nome: "Robert Wilson",
    telefone: "+1 234 567 8904",
    agendamentos: 2,
    ultimavisita: "2025-03-30"
  }
];

const CustomersList = () => {
  const sendWhatsAppMessage = (telefone: string) => {
    const message = "Hi! I wanted to follow up about your recent appointment.";
    const whatsappURL = `https://api.whatsapp.com/send?telefone=${telefone.replace(/\s+/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Card className="animate-fade-in dark:bg-zinc-950 ">
      <CardHeader>
        <CardTitle>Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Nome</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Telefone</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Agendamentos</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Última visita</th>
                <th className="text-right py-3 px-8 text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-900 transition-colors duration-200 ">
                  <td className="py-3 px-4 text-sm font-medium">{customer.nome}</td>
                  <td className="py-3 px-4 text-sm">{customer.telefone}</td>
                  <td className="py-3 px-4 text-sm">{customer.agendamentos}</td>
                  <td className="py-3 px-4 text-sm">{customer.ultimavisita}</td>
                  <td className="py-3 px-4 text-sm text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => sendWhatsAppMessage(customer.telefone)}
                      className="dark:bg-zinc-950 dark:hover:bg-agilis-accent dark:hover:text-black"
                    >
                      Contato
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

export default CustomersList;
