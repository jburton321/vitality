export const Hero = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-blue-600 px-4 sm:px-6 pt-20 sm:pt-20 md:pt-24 pb-4 sm:pb-6 relative">
      <img
        src="/stamp.png"
        alt="Future of Travel Focus Group"
        className="w-36 h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 object-contain absolute left-1/2 sm:left-8 md:left-12 lg:left-[calc(50%-560px+24px)] -translate-x-1/2 sm:translate-x-0 -top-[72px] sm:-top-14 md:-top-16 z-10"
      />
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start justify-start max-w-7xl mx-auto sm:pl-32 md:pl-40">
        <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start justify-start flex-1 text-center sm:text-left">
          <div
            className="text-fluid-hero leading-none uppercase"
            style={{ letterSpacing: "0.03em" }}
          >
            <span className="text-yellow-400">Complimentary </span>
            <span className="text-white">3-DAY/2-NIGHT</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-start">
            <div
              className="text-white font-bold text-fluid-hero-title leading-none uppercase"
              style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
            >
              VACATION
            </div>
            <div
              className="text-white text-fluid-script leading-none font-normal"
              style={{ fontFamily: "'Brinattan-Regular', cursive" }}
            >
              For Two!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
