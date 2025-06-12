
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Clock } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card className="animate-fade-in rounded" style={{ animationDelay: '0ms' }}>
        <CardContent className="p-6 dark:bg-zinc-950 rounded">
          <div className="flex items-center">
            <div className="p-2 bg-agilis-accent/10 rounded-md mr-4">
              <Calendar className="h-6 w-6 text-agilis-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Agendamentos de Hoje</p>
              <h3 className="text-2xl font-semibold mt-1">4</h3>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="animate-fade-in rounded" style={{ animationDelay: '100ms' }}>
        <CardContent className="p-6 dark:bg-zinc-950 rounded">
          <div className="flex items-center">
            <div className="p-2 bg-agilis-accent/10 rounded-md mr-4">
              <Users className="h-6 w-6 text-agilis-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total de clientes</p>
              <h3 className="text-2xl font-semibold mt-1">85</h3>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="animate-fade-in rounded" style={{ animationDelay: '200ms' }}>
        <CardContent className="p-6 dark:bg-zinc-950 rounded">
          <div className="flex items-center">
            <div className="p-2 bg-agilis-accent/10 rounded-md mr-4">
              <Clock className="h-6 w-6 text-agilis-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Reservas esta semana</p>
              <h3 className="text-2xl font-semibold mt-1">23</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
