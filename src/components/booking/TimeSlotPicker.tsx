
import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";

interface TimeSlot {
  id: string;
  time: string;
}

interface TimeSlotPickerProps {
  selectedDate: Date | null;
  availableTimeSlots: number[];
  selectedTimeSlot: string | null;
  onSelectTimeSlot: (timeSlotId: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  selectedDate,
  availableTimeSlots,
  selectedTimeSlot,
  onSelectTimeSlot
}) => {
  const morningTimeSlots: TimeSlot[] = [
    { id: 'morning-1', time: '8:00 AM' },
    { id: 'morning-2', time: '9:00 AM' },
    { id: 'morning-3', time: '10:00 AM' },
    { id: 'morning-4', time: '11:00 AM' },
  ];
  
  const afternoonTimeSlots: TimeSlot[] = [
    { id: 'afternoon-1', time: '12:00 PM' },
    { id: 'afternoon-2', time: '1:00 PM' },
    { id: 'afternoon-3', time: '2:00 PM' },
    { id: 'afternoon-4', time: '3:00 PM' },
    { id: 'afternoon-5', time: '4:00 PM' },
  ];
  
  const eveningTimeSlots: TimeSlot[] = [
    { id: 'evening-1', time: '5:00 PM' },
    { id: 'evening-2', time: '6:00 PM' },
    { id: 'evening-3', time: '7:00 PM' },
    { id: 'evening-4', time: '8:00 PM' },
  ];
  
  // Function to determine if a time slot should be shown based on available time slots (1=morning, 2=afternoon, 3=evening)
  const isTimeSlotAvailable = (slotId: string) => {
    if (slotId.startsWith('morning')) return availableTimeSlots.includes(1);
    if (slotId.startsWith('afternoon')) return availableTimeSlots.includes(2);
    if (slotId.startsWith('evening')) return availableTimeSlots.includes(3);
    return false;
  };
  
  if (!selectedDate) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500">Please select a date first</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-agilis-dark mb-4">
        Select a time on {format(selectedDate, 'EEEE, MMMM d')}
      </h2>
      
      {availableTimeSlots.includes(1) && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-500">Morning</h3>
          <div className="grid grid-cols-4 gap-2">
            {morningTimeSlots.map((slot) => (
              <Card 
                key={slot.id}
                className={`
                  cursor-pointer text-center transition-all
                  ${selectedTimeSlot === slot.id ? 'border-agilis-accent bg-agilis-accent/5' : 'hover:border-agilis-accent'}
                `}
                onClick={() => onSelectTimeSlot(slot.id)}
              >
                <CardContent className="p-3">
                  <span className="text-agilis-dark">{slot.time}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      {availableTimeSlots.includes(2) && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-500">Afternoon</h3>
          <div className="grid grid-cols-4 gap-2">
            {afternoonTimeSlots.map((slot) => (
              <Card 
                key={slot.id}
                className={`
                  cursor-pointer text-center transition-all
                  ${selectedTimeSlot === slot.id ? 'border-agilis-accent bg-agilis-accent/5' : 'hover:border-agilis-accent'}
                `}
                onClick={() => onSelectTimeSlot(slot.id)}
              >
                <CardContent className="p-3">
                  <span className="text-agilis-dark">{slot.time}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      {availableTimeSlots.includes(3) && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-500">Evening</h3>
          <div className="grid grid-cols-4 gap-2">
            {eveningTimeSlots.map((slot) => (
              <Card 
                key={slot.id}
                className={`
                  cursor-pointer text-center transition-all
                  ${selectedTimeSlot === slot.id ? 'border-agilis-accent bg-agilis-accent/5' : 'hover:border-agilis-accent'}
                `}
                onClick={() => onSelectTimeSlot(slot.id)}
              >
                <CardContent className="p-3">
                  <span className="text-agilis-dark">{slot.time}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotPicker;
