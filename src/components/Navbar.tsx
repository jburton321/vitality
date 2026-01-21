import { Phone } from "lucide-react";

export const Navbar = (): JSX.Element => {
  return (
    <>
      <header className="bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center sm:justify-start">
              <img
                className="w-32 h-32 sm:w-16 sm:h-16 object-contain"
                src="_1024-x-1024-vitality-logo0.png"
                alt="Vitality Vacations Logo"
              />
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <div
                  className="text-blue-600 font-extrabold text-fluid-base leading-none uppercase"
                  style={{ fontFamily: "Montserrat-ExtraBold, sans-serif" }}
                >
                  VIRTUAL TRAVEL CLUB SURVEY
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-row gap-3 items-center justify-start">
              <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center touch-target">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div
                className="text-left font-semibold text-fluid-sm"
                style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
              >
                <span className="text-gray-900">Call to Claim </span>
                <span className="text-blue-600">%PHONE%</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sm:hidden bg-yellow-400 py-3 flex flex-row gap-3 items-center justify-center w-full">
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center touch-target">
          <Phone className="w-5 h-5 text-yellow-400" />
        </div>
        <div
          className="text-center font-semibold text-fluid-sm"
          style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
        >
          <span className="text-white">Call to Claim </span>
          <span className="text-white">%PHONE%</span>
        </div>
      </div>
    </>
  );
};
