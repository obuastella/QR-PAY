import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    // Ademola you can edit the calendar as you wish
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      className="p-2 border border-[#F8F8F880] bg-[#040428] rounded-lg cursor-pointer placeholder:text-center w-auto"
      placeholderText="Select Date"
    />
  );
};


export default Calendar;
