export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-blue-950 py-12 flex flex-col gap-8 items-center justify-center w-full">
      <img
        className="w-48 sm:w-52 h-28 object-cover"
        src="rectangle0.png"
        alt="Company Logo"
      />
      <div className="text-white text-center text-xs sm:text-sm leading-relaxed max-w-xl px-4">
        Copyright © 2026 VitalityVacations.com | All rights reserved.
        <br />
        Privacy Policy | Terms and conditions apply
      </div>
    </footer>
  );
};
