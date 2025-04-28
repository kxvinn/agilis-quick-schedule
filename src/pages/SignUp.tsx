
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const timeSlots = [
  { id: 1, label: "Morning (8am - 12pm)" },
  { id: 2, label: "Afternoon (12pm - 5pm)" },
  { id: 3, label: "Evening (5pm - 9pm)" },
];

const daysOfWeek = [
  { id: 'mon', label: "Mon" },
  { id: 'tue', label: "Tue" },
  { id: 'wed', label: "Wed" },
  { id: 'thu', label: "Thu" },
  { id: 'fri', label: "Fri" },
  { id: 'sat', label: "Sat" },
  { id: 'sun', label: "Sun" },
];

const SignUp = () => {
  const [businessName, setBusinessName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>(['mon', 'tue', 'wed', 'thu', 'fri']);
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-agilis-accent mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        
        <Card className="animate-fade-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Create your Agilis account
            </CardTitle>
            <CardDescription className="text-center">
              Start simplifying your scheduling process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  placeholder="Your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
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
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Available Days</Label>
                <div className="flex flex-wrap gap-2">
                  {daysOfWeek.map(day => (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => handleDayToggle(day.id)}
                      className={`px-3 py-1 rounded-md text-sm ${
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
                <Label>Available Time Slots</Label>
                <div className="space-y-2">
                  {timeSlots.map(slot => (
                    <div key={slot.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`slot-${slot.id}`}
                        checked={selectedTimeSlots.includes(slot.id)}
                        onChange={() => handleTimeSlotToggle(slot.id)}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-agilis-accent focus:ring-agilis-accent"
                      />
                      <label htmlFor={`slot-${slot.id}`} className="text-sm text-gray-700">
                        {slot.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-agilis-accent hover:bg-agilis-accent/90">
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center w-full text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-agilis-accent hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
