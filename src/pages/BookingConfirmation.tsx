
import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, Check, ArrowRight } from "lucide-react";

interface BookingData {
  service: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
}

interface LocationState {
  bookingData: BookingData;
  businessPhone: string;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  
  useEffect(() => {
    // If no booking data is provided, redirect to the booking page
    if (!state?.bookingData) {
      navigate('/booking');
    }
    
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [state, navigate]);
  
  if (!state?.bookingData) {
    return null; // Redirecting, no need to render
  }
  
  const { bookingData, businessPhone } = state;
  const bookingDate = bookingData.date ? new Date(bookingData.date) : null;
  const formattedDate = bookingDate?.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  // Function to open WhatsApp with the booking details
  const openWhatsApp = () => {
    const message = `Hi! I just booked ${bookingData.service} on ${formattedDate} at ${bookingData.time} under the name ${bookingData.customerName}.`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${businessPhone.replace(/\s+/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-agilis-dark mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-8">Your appointment has been successfully scheduled.</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-5 w-5 text-agilis-accent mr-2" />
              <h2 className="text-lg font-semibold text-agilis-dark">Booking Details</h2>
            </div>
            
            <dl className="space-y-3 text-left">
              <div className="grid grid-cols-3">
                <dt className="col-span-1 text-gray-500">Service:</dt>
                <dd className="col-span-2 font-medium text-agilis-dark">{bookingData.service}</dd>
              </div>
              <div className="grid grid-cols-3">
                <dt className="col-span-1 text-gray-500">Date:</dt>
                <dd className="col-span-2 font-medium text-agilis-dark">{formattedDate}</dd>
              </div>
              <div className="grid grid-cols-3">
                <dt className="col-span-1 text-gray-500">Time:</dt>
                <dd className="col-span-2 font-medium text-agilis-dark">{bookingData.time}</dd>
              </div>
              <div className="grid grid-cols-3">
                <dt className="col-span-1 text-gray-500">Name:</dt>
                <dd className="col-span-2 font-medium text-agilis-dark">{bookingData.customerName}</dd>
              </div>
            </dl>
          </div>
          
          <Button
            onClick={openWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 mb-4"
          >
            Confirm via WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Link to="/">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
