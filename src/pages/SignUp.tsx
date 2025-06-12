
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const timeSlots = [
  { id: 1, label: "Manhã (8:00 - 12:00)" },
  { id: 2, label: "Tarde (12:00 - 17:00)" },
  { id: 3, label: "Noite (17:00 - 21:00)" },
];

const daysOfWeek = [
  { id: 'seg', label: "Seg" },
  { id: 'ter', label: "Ter" },
  { id: 'qua', label: "Qua" },
  { id: 'qui', label: "Qui" },
  { id: 'sex', label: "Sex" },
  { id: 'sab', label: "Sab" },
  { id: 'dom', label: "Dom" },
];

const SignUp = () => {
  const [businessName, setBusinessName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>(['seg', 'ter', 'qua', 'qui', 'sex']);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<number[]>([1, 2]);

  const handleDayToggle = (dayId: string) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter(id => id !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  const handleTimeSlotToggle = (slotId: number) => {
    if (selectedTimeSlots.includes(slotId)) {
      setSelectedTimeSlots(selectedTimeSlots.filter(id => id !== slotId));
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, slotId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission and redirect to dashboard
    console.log({
      businessName,
      whatsapp,
      email,
      password,
      availableDays: selectedDays,
      availableTimeSlots: selectedTimeSlots
    });
    
    // For demo purposes, redirect to admin dashboard
    window.location.href = '/admin/dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-zinc-950">
      <div className="max-w-md mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-agilis-accent mb-8 dark:text-white">
          <ArrowLeft className="mr-2 h-4 w-4 " />
          Voltar ao Início
        </Link>
        
        <Card className="animate-fade-in dark:bg-zinc-950">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Crie sua conta no Agilis
            </CardTitle>
            <CardDescription className="text-center">
              Comece a simplificar o seu processo de agendamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Nome Empresarial</Label>
                <Input
                  id="businessName"
                  className="dark:bg-zinc-900"
                  placeholder="Seu nome empresarial"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="whatsapp">Número do WhatsApp</Label>
                <Input
                  id="whatsapp"
                  className="dark:bg-zinc-900"
                  placeholder="+1 234 567 8900"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="dark:bg-zinc-900"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  className="dark:bg-zinc-900"
                  type="password"
                  placeholder="Crie uma senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Dias disponíveis</Label>
                <div className="flex flex-wrap gap-2">
                  {daysOfWeek.map(day => (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => handleDayToggle(day.id)}
                      className={`px-3 py-1 rounded-md dark:text-black font-bold text-sm ${
                        selectedDays.includes(day.id)
                          ? 'bg-agilis-accent text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Disponibilidade de Horário</Label>
                <div className="space-y-2">
                  {timeSlots.map(slot => (
                    <div key={slot.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`slot-${slot.id}`}
                        checked={selectedTimeSlots.includes(slot.id)}
                        onChange={() => handleTimeSlotToggle(slot.id)}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-agilis-accent focus:ring-agilis-accent "
                      />
                      <label htmlFor={`slot-${slot.id}`} className="text-sm text-gray-700 dark:text-neutral-400">
                        {slot.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-agilis-accent hover:bg-agilis-accent/90 font-bold">
                Criar conta
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center w-full text-sm text-gray-600 dark:text-white">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-agilis-accent hover:underline font-bold">
                Entrar
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
