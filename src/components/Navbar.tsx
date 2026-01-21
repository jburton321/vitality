import { Phone } from "lucide-react";

export const Navbar = (): JSX.Element => {
  return (
    <header className="bg-white">
      <nav className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 gap-4 sm:gap-0">
        <div className="flex flex-row gap-3 items-center justify-start">
          <img
            className="w-16 h-16 object-contain"
            src="_1024-x-1024-vitality-logo0.png"
            alt="Vitality Vacations Logo"
          />
          <div className="flex flex-col gap-1">
            <div className="text-gray-900 text-left font-semibold text-sm" style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}>
              VITALITY VACATIONS
            </div>
            <div className="text-blue-600 text-left font-extrabold text-[17px] leading-none uppercase" style={{ fontFamily: "Montserrat-ExtraBold, sans-serif" }}>
              VIRTUAL TRAVEL CLUB SURVEY
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-start">
          <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <div className="text-left font-semibold text-sm" style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}>
            <span className="text-gray-900">Call to Claim </span>
            <span className="text-blue-600">%PHONE%</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
