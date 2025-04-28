
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Customer {
  id: number;
  name: string;
  phone: string;
  appointments: number;
  lastVisit: string;
}

const customers: Customer[] = [
  {
    id: 1,
    name: "John Smith",
    phone: "+1 234 567 8900",
    appointments: 12,
    lastVisit: "2025-04-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    phone: "+1 234 567 8901",
    appointments: 5,
    lastVisit: "2025-04-22"
  },
  {
    id: 3,
    name: "Michael Brown",
    phone: "+1 234 567 8902",
    appointments: 8,
    lastVisit: "2025-04-10"
  },
  {
    id: 4,
    name: "Emily Davis",
    phone: "+1 234 567 8903",
    appointments: 3,
    lastVisit: "2025-04-24"
  },
  {
    id: 5,
    name: "Robert Wilson",
    phone: "+1 234 567 8904",
    appointments: 2,
    lastVisit: "2025-03-30"
  }
];

const CustomersList = () => {
  const sendWhatsAppMessage = (phone: string) => {
    const message = "Hi! I wanted to follow up about your recent appointment.";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone.replace(/\s+/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Phone</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Appointments</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Last Visit</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium">{customer.name}</td>
                  <td className="py-3 px-4 text-sm">{customer.phone}</td>
                  <td className="py-3 px-4 text-sm">{customer.appointments}</td>
                  <td className="py-3 px-4 text-sm">{customer.lastVisit}</td>
                  <td className="py-3 px-4 text-sm text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => sendWhatsAppMessage(customer.phone)}
                    >
                      Contact
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
