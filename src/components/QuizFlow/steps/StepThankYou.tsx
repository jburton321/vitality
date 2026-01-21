import { CheckCircle, Calendar, Clock, Video, Download } from "lucide-react";

interface StepThankYouProps {
  firstName: string;
}

export const StepThankYou = ({ firstName }: StepThankYouProps): JSX.Element => {
  const handleSaveToCalendar = () => {
    const event = {
      title: "Vitality Vacations VTC Session",
      start: "2026-01-10T15:45:00",
      end: "2026-01-10T16:30:00",
      description: "Virtual Travel Club session via Zoom. Please attend with your spouse/partner.",
      location: "Zoom (link will be sent via email)",
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Vitality Vacations//VTC Session//EN
BEGIN:VEVENT
DTSTART:20260110T154500
DTEND:20260110T163000
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "vitality-vacations-vtc-session.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>

      <div>
        <h2
          className="text-blue-900 font-bold text-fluid-3xl uppercase mb-2"
          style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
        >
          You're All Set, {firstName || "Guest"}!
        </h2>
        <p
          className="text-gray-600 text-fluid-lg"
          style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
        >
          Your Virtual Travel Club session has been booked.
        </p>
      </div>

      <div className="w-full max-w-md bg-blue-50 rounded-xl p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p
                className="text-gray-500 text-fluid-sm"
                style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
              >
                Date
              </p>
              <p
                className="text-gray-800 font-semibold text-fluid-base"
                style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
              >
                Friday, January 10, 2026
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p
                className="text-gray-500 text-fluid-sm"
                style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
              >
                Time
              </p>
              <p
                className="text-gray-800 font-semibold text-fluid-base"
                style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
              >
                3:45 PM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p
                className="text-gray-500 text-fluid-sm"
                style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
              >
                Format
              </p>
              <p
                className="text-gray-800 font-semibold text-fluid-base"
                style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
              >
                Virtual (Zoom)
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSaveToCalendar}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
      >
        <Download className="w-5 h-5" />
        <span
          className="font-semibold text-fluid-base"
          style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
        >
          Save to Calendar
        </span>
      </button>
    </div>
  );
};
