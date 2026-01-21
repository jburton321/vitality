import { Phone } from "lucide-react";

export const Navbar = (): JSX.Element => {
  return (
    <header className="bg-white">
      <nav className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-0">
        <div className="flex flex-row gap-4 items-center justify-start">
          <div className="bg-white p-2 flex flex-row gap-2 items-center justify-start h-20">
            <img
              className="border-solid border-transparent border w-24 h-24 object-cover"
              src="_1024-x-1024-vitality-logo0.png"
              alt="Vitality Vacations Logo"
            />
          </div>
          <div className="text-blue-600 text-left font-extrabold text-base sm:text-lg uppercase font-sans">
            VIRTUAL TRAVEL CLUB SURVEY
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-start">
          <div className="bg-yellow-400 rounded-2xl w-8 h-8 flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div className="text-left font-semibold text-sm">
            <span className="text-gray-900">Call to Claim </span>
            <span className="text-blue-600">%PHONE%</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
