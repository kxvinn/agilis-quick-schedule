
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomerFormProps {
  onSubmit: (name: string, phone: string) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      onSubmit(name, phone);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-agilis-dark mb-4">Enter your details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+1 234 567 8900"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <p className="text-xs text-gray-500">
            We'll send you a confirmation via WhatsApp.
          </p>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-agilis-accent hover:bg-agilis-accent/90"
        >
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default CustomerForm;
