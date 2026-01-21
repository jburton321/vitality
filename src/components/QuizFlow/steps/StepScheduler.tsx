import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Globe } from "lucide-react";

interface StepSchedulerProps {
  selectedDate: string;
  selectedTime: string;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "3:45 PM",
  "4:00 PM",
];

const generateCalendarDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const days: (number | null)[] = [];

  for (let i = 0; i < startingDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const StepScheduler = ({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: StepSchedulerProps): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2026);

  const days = generateCalendarDays(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const formatDateString = (day: number) => {
    return `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="text-center">
        <h2
          className="text-blue-900 text-center font-bold text-fluid-2xl uppercase mb-2"
          style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
        >
          Select a Virtual Date & Time for Your VTC Session
        </h2>
        <div className="flex flex-col items-center gap-1 text-gray-600">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span
              className="text-fluid-sm"
              style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
            >
              Time Zone: Your Local Time
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span
              className="text-fluid-sm"
              style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
            >
              Appointment Length: ~30-45 mins
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-blue-600">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <span
              className="text-white font-semibold text-fluid-lg"
              style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
            >
              {monthNames[currentMonth]} {currentYear}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-gray-500 text-xs font-medium py-2"
                  style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => (
                <div key={index} className="aspect-square">
                  {day !== null && (
                    <button
                      type="button"
                      onClick={() => !isDateDisabled(day) && onDateSelect(formatDateString(day))}
                      disabled={isDateDisabled(day)}
                      className={`
                        w-full h-full rounded-lg flex items-center justify-center text-sm font-medium transition-all
                        ${isDateDisabled(day)
                          ? "text-gray-300 cursor-not-allowed"
                          : selectedDate === formatDateString(day)
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-blue-100"
                        }
                      `}
                      style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
                    >
                      {day}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedDate && (
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <span
              className="text-gray-700 font-medium text-fluid-base"
              style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
            >
              Available Times
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => onTimeSelect(time)}
                className={`
                  py-3 px-2 rounded-lg border-2 text-sm font-medium transition-all
                  ${selectedTime === time
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-blue-400"
                  }
                `}
                style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
