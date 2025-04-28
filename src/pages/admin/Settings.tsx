
import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const timeSlots = [
  { id: 1, label: "Morning (8am - 12pm)" },
  { id: 2, label: "Afternoon (12pm - 5pm)" },
  { id: 3, label: "Evening (5pm - 9pm)" },
];

const daysOfWeek = [
  { id: 'mon', label: "Monday" },
  { id: 'tue', label: "Tuesday" },
  { id: 'wed', label: "Wednesday" },
  { id: 'thu', label: "Thursday" },
  { id: 'fri', label: "Friday" },
  { id: 'sat', label: "Saturday" },
  { id: 'sun', label: "Sunday" },
];

const Settings = () => {
  const [businessName, setBusinessName] = useState('Elite Cuts Barbershop');
  const [whatsapp, setWhatsapp] = useState('+1 234 567 8900');
  const [email, setEmail] = useState('info@elitecuts.com');
  const [selectedDays, setSelectedDays] = useState<string[]>(['mon', 'tue', 'wed', 'thu', 'fri']);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<number[]>([1, 2]);
  const [bookingLink, setBookingLink] = useState('agilis.com/elite-cuts');

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

  const handleSaveSettings = () => {
    // Here you would save the settings
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-agilis-dark">Settings</h1>
          <p className="text-gray-600">Configure your account and appointment settings.</p>
        </div>
        
        <Tabs defaultValue="general" className="animate-fade-in">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="booking">Booking Link</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
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
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="availability">
            <Card>
              <CardHeader>
                <CardTitle>Available Days and Times</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>Working Days</Label>
                    <div className="flex flex-wrap gap-3">
                      {daysOfWeek.map((day) => (
                        <button
                          key={day.id}
                          type="button"
                          onClick={() => handleDayToggle(day.id)}
                          className={`px-4 py-2 rounded-md ${
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
                  
                  <div className="space-y-4">
                    <Label>Working Hours</Label>
                    <div className="space-y-3">
                      {timeSlots.map((slot) => (
                        <div key={slot.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`slot-${slot.id}`}
                            checked={selectedTimeSlots.includes(slot.id)}
                            onChange={() => handleTimeSlotToggle(slot.id)}
                            className="mr-3 h-4 w-4 rounded border-gray-300 text-agilis-accent focus:ring-agilis-accent"
                          />
                          <label htmlFor={`slot-${slot.id}`} className="text-gray-700">
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
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="booking">
            <Card>
              <CardHeader>
                <CardTitle>Your Public Booking Link</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="bookingLink">Your Unique Link</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="bookingLink"
                        value={bookingLink}
                        onChange={(e) => setBookingLink(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline" onClick={() => navigator.clipboard.writeText(bookingLink)}>
                        Copy
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Share this link with your customers so they can book appointments online.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleSaveSettings}
                      className="bg-agilis-accent hover:bg-agilis-accent/90"
                    >
                      Save Changes
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
