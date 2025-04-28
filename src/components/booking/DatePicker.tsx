
import React, { useState } from 'react';
import { format, addDays, isSameDay } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DatePickerProps {
  availableDays: string[];
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ 
  availableDays, 
  selectedDate, 
  onSelectDate 
}) => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  
  // Map day string IDs to day numbers (0 = Sunday, 1 = Monday, etc.)
  const dayIdToNumber: Record<string, number> = {
    'sun': 0,
    'mon': 1,
    'tue': 2,
    'wed': 3,
    'thu': 4,
    'fri': 5,
    'sat': 6
  };
  
  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = addDays(startDate, i);
    const dayOfWeek = format(date, 'EEE').toLowerCase();
    const dayId = Object.keys(dayIdToNumber).find(key => 
      dayIdToNumber[key] === date.getDay()
    );
    return {
      date,
      dayOfWeek: format(date, 'EEE'),
      dayOfMonth: format(date, 'd'),
      month: format(date, 'MMM'),
      isAvailable: dayId ? availableDays.includes(dayId) : false
    };
  });
  
  const handleNextWeek = () => {
    setStartDate(addDays(startDate, 7));
  };
  
  const handlePrevWeek = () => {
    const prevWeek = addDays(startDate, -7);
    if (prevWeek >= today) {
      setStartDate(prevWeek);
    } else {
      setStartDate(today);
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-agilis-dark">Select a date</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevWeek}
            disabled={isSameDay(startDate, today)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextWeek}
          >
            Next
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {dates.slice(0, 7).map((dateObj) => (
          <Card
            key={dateObj.date.toString()}
            className={`
              cursor-pointer border text-center transition-all
              ${dateObj.isAvailable ? 'hover:border-agilis-accent' : 'opacity-50 cursor-not-allowed'}
              ${selectedDate && isSameDay(selectedDate, dateObj.date) ? 'border-agilis-accent bg-agilis-accent/5' : ''}
            `}
            onClick={() => dateObj.isAvailable && onSelectDate(dateObj.date)}
          >
            <CardContent className="p-2">
              <div className="text-xs text-gray-500">{dateObj.dayOfWeek}</div>
              <div className="text-lg font-semibold text-agilis-dark">{dateObj.dayOfMonth}</div>
              <div className="text-xs text-gray-500">{dateObj.month}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
