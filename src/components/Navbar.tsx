import { Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Navbar = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (scrollDelta < -scrollThreshold) {
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
      } else if (scrollDelta > scrollThreshold) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center sm:justify-start">
              <img
                className="w-48 h-auto sm:w-40 sm:h-auto object-contain"
                src="/logo-vitality.png"
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
    </div>
  );
};
