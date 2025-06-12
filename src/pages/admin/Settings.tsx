
import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";

const horarios = [
  { id: 1, label: "Manhã (8:00 - 12:00)" },
  { id: 2, label: "Tarde (12:00 - 17:00)" },
  { id: 3, label: "Noite (17:00 - 21:00)" },
];

const diasDaSemana = [
  { id: 'seg', label: "Segunda" },
  { id: 'ter', label: "Terça" },
  { id: 'qua', label: "Quarta" },
  { id: 'qui', label: "Quinta" },
  { id: 'sex', label: "Sexta" },
  { id: 'sab', label: "Sábado" },
  { id: 'dom', label: "Domingo" },
];

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [nomeEmpresarial, setnomeEmpresarial] = useState('Elite Cuts Barbershop');
  const [whatsapp, setWhatsapp] = useState('+1 234 567 8900');
  const [email, setEmail] = useState('info@elitecuts.com');
  const [diasSelecionados, setdiasSelecionados] = useState<string[]>(['mon', 'tue', 'wed', 'thu', 'fri']);
  const [horariosSelecionados, sethorariosSelecionados] = useState<number[]>([1, 2]);
  const [linkAgendamento, setlinkAgendamento] = useState('agilis.com/elite-cuts');

  const handleDayToggle = (dayId: string) => {
    if (diasSelecionados.includes(dayId)) {
      setdiasSelecionados(diasSelecionados.filter(id => id !== dayId));
    } else {
      setdiasSelecionados([...diasSelecionados, dayId]);
    }
  };

  const handleHorariosToggle = (slotId: number) => {
    if (horariosSelecionados.includes(slotId)) {
      sethorariosSelecionados(horariosSelecionados.filter(id => id !== slotId));
    } else {
      sethorariosSelecionados([...horariosSelecionados, slotId]);
    }
  };

  const handleSaveSettings = () => {
    toast.success("Configurações salvas!");
  };

  return (
    <div className="bg-gray-50 dark:bg-zinc-950 min-h-screen">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-agilis-dark dark:text-white">Configurações</h1>
          <p className="text-gray-600 dark:text-gray-300">Configuração da conta</p>
        </div>
        
        <Tabs defaultValue="general" className="animate-fade-in dark:bg-zinc-950">
          <TabsList className="mb-6 dark:bg-zinc-900">
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="appearance">Aparência</TabsTrigger>
            <TabsTrigger value="availability">Disponibilidade</TabsTrigger>
            <TabsTrigger value="booking">Link para Agendamento</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card className="dark:bg-zinc-950">
              <CardHeader>
                <CardTitle>Informações do Negócio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nomeEmpresarial">Nome Empresarial</Label>
                    <Input
                      id="nomeEmpresarial"
                      className="dark:bg-zinc-900"
                      value={nomeEmpresarial}
                      onChange={(e) => setnomeEmpresarial(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">Número do WhatsApp</Label>
                    <Input
                    className="dark:bg-zinc-900"
                      id="whatsapp"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    className="dark:bg-zinc-900"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleSaveSettings}
                      className="bg-agilis-accent hover:bg-agilis-accent/90"
                    >
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card className="dark:bg-zinc-950">
              <CardHeader>
                <CardTitle>Configurações do tema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>Modo do tema</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setTheme("light")}
                        className={`flex items-center justify-center p-4 rounded-lg border ${
                          theme === "light"
                            ? 'border-agilis-accent bg-agilis-accent/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-agilis-accent/50'
                        }`}
                      >
                        <div className="text-center">
                          <Sun className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                          <span className={theme === "light" ? "font-medium" : ""}>Modo claro</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setTheme("dark")}
                        className={`flex items-center justify-center p-4 rounded-lg border ${
                          theme === "dark"
                            ? 'border-agilis-accent bg-agilis-accent/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-agilis-accent/50'
                        }`}
                      >
                        <div className="text-center">
                          <Moon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                          <span className={theme === "dark" ? "font-medium" : ""}>Modo Escuro</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setTheme("system")}
                        className={`flex items-center justify-center p-4 rounded-lg border ${
                          theme === "system"
                            ? 'border-agilis-accent bg-agilis-accent/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-agilis-accent/50'
                        }`}
                      >
                        <div className="text-center">
                          <Monitor className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                          <span className={theme === "system" ? "font-medium" : ""}>Padrão do sistema</span>
                        </div>
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Escolha como Agilis aparecerá em todo o seu aplicativo.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleSaveSettings}
                      className="bg-agilis-accent hover:bg-agilis-accent/90"
                    >
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="availability">
            <Card className="dark:bg-zinc-950">
              <CardHeader>
                <CardTitle>Dias e Horas disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>Dias de Trabalho</Label>
                    <div className="flex flex-wrap gap-3">
                      {diasDaSemana.map((day) => (
                        <button
                          key={day.id}
                          type="button"
                          onClick={() => handleDayToggle(day.id)}
                          className={`px-4 py-2 rounded-md ${
                            diasSelecionados.includes(day.id)
                              ? 'bg-agilis-accent text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-900 dark:text-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Horas de Trabalho</Label>
                    <div className="space-y-3"> 
                      {horarios.map((slot) => (
                        <div key={slot.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`slot-${slot.id}`}
                            checked={horariosSelecionados.includes(slot.id)}
                            onChange={() => handleHorariosToggle(slot.id)}
                            className="mr-3 h-4 w-4 rounded border-gray-300 text-agilis-accent focus:ring-agilis-accent"
                          />
                          <label htmlFor={`slot-${slot.id}`} className="text-gray-700 dark:text-gray-300">
                            {slot.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleSaveSettings}
                      className="bg-agilis-accent hover:bg-agilis-accent/90"
                    >
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="booking">
            <Card className="dark:bg-zinc-950">
              <CardHeader>
                <CardTitle>Seu link de agendamento público</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="linkAgendamento">Seu link único</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="linkAgendamento"
                        value={linkAgendamento}
                        
                        onChange={(e) => setlinkAgendamento(e.target.value)}
                        className="flex-1 dark:bg-zinc-900"
                      />
                      <Button  className="dark:bg-zinc-950 dark:hover:bg-gray-900 "
                        variant="outline" 
                        onClick={() => {


                          
                          navigator.clipboard.writeText(linkAgendamento);
                          toast.success("Link copied to clipboard!");
                        }}
                      >
                        Copiar
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Compartilhe este link com os seus clientes para que eles possam agendar online.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleSaveSettings}
                      className="bg-agilis-accent hover:bg-agilis-accent/90"
                    >
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
