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
        lastScrollY.current = currentScrollY;
      } else if (scrollDelta > scrollThreshold) {
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
      } else if (scrollDelta < -scrollThreshold) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 shadow-sm transition-transform duration-300 ease-in-out will-change-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-row items-center justify-between px-3 sm:px-6 py-2 gap-2">
            <div className="flex flex-row gap-2 items-center justify-start">
              <img
                className="w-32 sm:w-36 h-auto object-contain"
                src="/logo-vitality.png"
                alt="Vitality Vacations Logo"
              />
              <div
                className="hidden sm:block text-blue-600 font-extrabold text-sm leading-none uppercase"
                style={{ fontFamily: "Montserrat-ExtraBold, sans-serif" }}
              >
                VIRTUAL TRAVEL CLUB SURVEY
              </div>
            </div>
            <div className="hidden sm:flex flex-row gap-2 items-center justify-start">
              <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div
                className="text-left font-semibold text-sm"
                style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
              >
                <span className="text-gray-900">Call to Claim </span>
                <span className="text-blue-600">%PHONE%</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sm:hidden bg-yellow-400 py-2 flex flex-row gap-2 items-center justify-center w-full">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
          <Phone className="w-4 h-4 text-yellow-400" />
        </div>
        <div
          className="text-center font-semibold text-sm"
          style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
        >
          <span className="text-white">Call to Claim </span>
          <span className="text-white">%PHONE%</span>
        </div>
      </div>
    </div>
  );
};
