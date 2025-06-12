
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Appointment {
  id: number;
  nomeCliente: string;
  servico: string;
  data: string;
  hora: string;
  telefone: string;
}

const appointments: Appointment[] = [
  {
    id: 1,
    nomeCliente: "John Smith",
    servico: "Haircut",
    data: "2025-05-02",
    hora: "10:00 AM",
    telefone: "+1 234 567 8900"
  },
  {
    id: 2,
    nomeCliente: "Sarah Johnson",
    servico: "Hair Coloring",
    data: "2025-05-02",
    hora: "1:30 PM",
    telefone: "+1 234 567 8901"
  },
  {
    id: 3,
    nomeCliente: "Michael Brown",
    servico: "Beard Trim",
    data: "2025-05-03",
    hora: "11:00 AM",
    telefone: "+1 234 567 8902"
  },
  {
    id: 4,
    nomeCliente: "Emily Davis",
    servico: "Full Treatment",
    data: "2025-05-04",
    hora: "3:00 PM",
    telefone: "+1 234 567 8903"
  }
];

const AppointmentList = () => {
  const sendWhatsAppMessage = (telefone: string) => {
    const message = "Hi! This is a reminder about your upcoming appointment.";
    const whatsappURL = `https://api.whatsapp.com/send?telefone=${telefone.replace(/\s+/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Card className="animate-fade-in dark:bg-zinc-950">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-amber-500">Cliente</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Serviço</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Data</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Hora</th>
                <th className="text-right py-3 px-12 text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-100 duration-200 hover:bg-gray-200 dark:hover:bg-zinc-900 transition-all">
                  <td className="py-3 px-4 text-sm">{appointment.nomeCliente}</td>
                  <td className="py-3 px-4 text-sm">{appointment.servico}</td>
                  <td className="py-3 px-4 text-sm">{appointment.data}</td>
                  <td className="py-3 px-4 text-sm">{appointment.hora}</td>
                  <td className="py-3 px-2 text-sm text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => sendWhatsAppMessage(appointment.telefone)}
                      className="dark:bg-zinc-950 dark:hover:bg-agilis-accent dark:hover:text-black"
                    >
                      Enviar lembrete
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

export default AppointmentList;
