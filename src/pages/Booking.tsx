
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingHeader from '../components/booking/BookingHeader';
import ServiceSelector from '../components/booking/ServiceSelector';
import DatePicker from '../components/booking/DatePicker';
import TimeSlotPicker from '../components/booking/TimeSlotPicker';
import CustomerForm from '../components/booking/CustomerForm';

// Mock data
const services = [
  {
    id: 1,
    name: "Haircut",
    duration: "30 min",
    price: "$25"
  },
  {
    id: 2,
    name: "Hair Coloring",
    duration: "90 min",
    price: "$120"
  },
  {
    id: 3,
    name: "Beard Trim",
    duration: "15 min",
    price: "$15"
  },
  {
    id: 4,
    name: "Full Treatment",
    duration: "120 min",
    price: "$150"
  }
];

const businessData = {
  name: "Elite Cuts Barbershop",
  availableDays: ['mon', 'tue', 'wed', 'thu', 'fri'],
  availableTimeSlots: [1, 2] // 1=morning, 2=afternoon, 3=evening
};

const Booking = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Handle service selection
  const handleSelectService = (serviceId: number) => {
    setSelectedService(serviceId);
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };
  
  // Handle date selection
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setCurrentStep(3);
    window.scrollTo(0, 0);
  };
  
  // Handle time slot selection
  const handleSelectTimeSlot = (timeSlotId: string) => {
    setSelectedTimeSlot(timeSlotId);
    setCurrentStep(4);
    window.scrollTo(0, 0);
  };
  
  // Handle form submission
  const handleSubmitForm = (name: string, phone: string) => {
    // Find the selected service
    const service = services.find(s => s.id === selectedService);
    
    // Find the selected time slot
    const timeSlotMap: Record<string, string> = {
      'morning-1': '8:00 AM',
      'morning-2': '9:00 AM',
      'morning-3': '10:00 AM',
      'morning-4': '11:00 AM',
      'afternoon-1': '12:00 PM',
      'afternoon-2': '1:00 PM',
      'afternoon-3': '2:00 PM',
      'afternoon-4': '3:00 PM',
      'afternoon-5': '4:00 PM',
      'evening-1': '5:00 PM',
      'evening-2': '6:00 PM',
      'evening-3': '7:00 PM',
      'evening-4': '8:00 PM',
    };
    
    const timeSlot = selectedTimeSlot ? timeSlotMap[selectedTimeSlot] : '';
    
    // Store booking data (in a real app, this would go to a backend)
    const bookingData = {
      service: service?.name,
      date: selectedDate?.toISOString(),
      time: timeSlot,
      customerName: name,
      customerPhone: phone
    };
    
    console.log('Booking data:', bookingData);
    
    // Redirect to confirmation page
    navigate('/booking/confirmation', { 
      state: { 
        bookingData,
        businessPhone: '+1234567890' // This would come from the business data
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BookingHeader businessName={businessData.name} />
      
      <div className="container mx-auto max-w-4xl py-8 px-4">
        {currentStep === 1 && (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
            <ServiceSelector 
              services={services} 
              selectedService={selectedService}
              onSelectService={handleSelectService}
            />
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
            <DatePicker 
              availableDays={businessData.availableDays}
              selectedDate={selectedDate}
              onSelectDate={handleSelectDate}
            />
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
            <TimeSlotPicker 
              selectedDate={selectedDate}
              availableTimeSlots={businessData.availableTimeSlots}
              selectedTimeSlot={selectedTimeSlot}
              onSelectTimeSlot={handleSelectTimeSlot}
            />
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
            <CustomerForm onSubmit={handleSubmitForm} />
          </div>
        )}
        
        {/* Booking summary - visible for all steps after service selection */}
        {selectedService && (
          <div className="mt-6 p-6 bg-agilis-accent/5 rounded-lg border border-agilis-accent/20 animate-fade-in">
            <h3 className="font-semibold text-lg text-agilis-dark mb-3">Booking Summary</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-600">Service:</dt>
                <dd className="font-medium text-agilis-dark">
                  {services.find(s => s.id === selectedService)?.name || 'Not selected'}
                </dd>
              </div>
              
              {selectedDate && (
                <div className="flex justify-between">
                  <dt className="text-gray-600">Date:</dt>
                  <dd className="font-medium text-agilis-dark">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </dd>
                </div>
              )}
              
              {selectedTimeSlot && (
                <div className="flex justify-between">
                  <dt className="text-gray-600">Time:</dt>
                  <dd className="font-medium text-agilis-dark">
                    {selectedTimeSlot === 'morning-1' && '8:00 AM'}
                    {selectedTimeSlot === 'morning-2' && '9:00 AM'}
                    {selectedTimeSlot === 'morning-3' && '10:00 AM'}
                    {selectedTimeSlot === 'morning-4' && '11:00 AM'}
                    {selectedTimeSlot === 'afternoon-1' && '12:00 PM'}
                    {selectedTimeSlot === 'afternoon-2' && '1:00 PM'}
                    {selectedTimeSlot === 'afternoon-3' && '2:00 PM'}
                    {selectedTimeSlot === 'afternoon-4' && '3:00 PM'}
                    {selectedTimeSlot === 'afternoon-5' && '4:00 PM'}
                    {selectedTimeSlot === 'evening-1' && '5:00 PM'}
                    {selectedTimeSlot === 'evening-2' && '6:00 PM'}
                    {selectedTimeSlot === 'evening-3' && '7:00 PM'}
                    {selectedTimeSlot === 'evening-4' && '8:00 PM'}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
