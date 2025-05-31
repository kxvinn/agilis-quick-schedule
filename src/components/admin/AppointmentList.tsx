
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Appointment {
  id: number;
  customerName: string;
  service: string;
  date: string;
  time: string;
  phone: string;
}

const appointments: Appointment[] = [
  {
    id: 1,
    customerName: "John Smith",
    service: "Haircut",
    date: "2025-05-02",
    time: "10:00 AM",
    phone: "+1 234 567 8900"
  },
  {
    id: 2,
    customerName: "Sarah Johnson",
    service: "Hair Coloring",
    date: "2025-05-02",
    time: "1:30 PM",
    phone: "+1 234 567 8901"
  },
  {
    id: 3,
    customerName: "Michael Brown",
    service: "Beard Trim",
    date: "2025-05-03",
    time: "11:00 AM",
    phone: "+1 234 567 8902"
  },
  {
    id: 4,
    customerName: "Emily Davis",
    service: "Full Treatment",
    date: "2025-05-04",
    time: "3:00 PM",
    phone: "+1 234 567 8903"
  }
];

const AppointmentList = () => {
  const sendWhatsAppMessage = (phone: string) => {
    const message = "Hi! This is a reminder about your upcoming appointment.";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone.replace(/\s+/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-amber-500">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Service</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Time</th>
                <th className="text-right py-3 px-12 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-100 duration-200 hover:bg-zinc-900 transition-all">
                  <td className="py-3 px-4 text-sm">{appointment.customerName}</td>
                  <td className="py-3 px-4 text-sm">{appointment.service}</td>
                  <td className="py-3 px-4 text-sm">{appointment.date}</td>
                  <td className="py-3 px-4 text-sm">{appointment.time}</td>
                  <td className="py-3 px-2 text-sm text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => sendWhatsAppMessage(appointment.phone)}
                    >
                      Send Reminder
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
