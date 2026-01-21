export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-blue-950 py-12 flex flex-col gap-8 items-center justify-center w-full">
      <img
        className="w-52 h-28 object-cover"
        src="rectangle0.png"
        alt="Company Logo"
      />
      <div className="text-white text-center text-[13px] leading-relaxed w-full max-w-xl px-4" style={{ fontFamily: "Roboto-Regular, sans-serif" }}>
        Copyright © 2026 VitalityVacations.com | All rights reserved.
        <br />
        Privacy Policy  | Terms and conditions apply
      </div>
    </footer>
  );
};
