const FOOTER_HEIGHT = "180px";

export const Footer = (): JSX.Element => {
  return (
    <>
      <div style={{ height: FOOTER_HEIGHT }} className="w-full" />
      <footer
        className="fixed bottom-0 left-0 right-0 bg-blue-950 py-8 sm:py-12 flex flex-col gap-6 sm:gap-8 items-center justify-center w-full z-0"
        style={{ height: FOOTER_HEIGHT }}
      >
        <img
          className="w-40 sm:w-52 h-auto object-contain"
          src="rectangle0.png"
          alt="Company Logo"
        />
        <div
          className="text-white text-center text-fluid-xs leading-relaxed w-full max-w-xl px-4"
          style={{ fontFamily: "Roboto-Regular, sans-serif" }}
        >
          Copyright &copy; 2026 VitalityVacations.com | All rights reserved.
          <br />
          Privacy Policy | Terms and conditions apply
        </div>
      </footer>
    </>
  );
};
