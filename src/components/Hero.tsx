export const Hero = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-blue-600 px-4 sm:px-6 py-6">
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-start max-w-7xl mx-auto">
        <div
          className="bg-blue-600 rounded-full p-2 flex flex-col gap-2 items-center justify-center w-28 h-28 sm:w-32 sm:h-32 shrink-0"
          style={{ boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="rounded-full border-solid border-white border-2 flex flex-col gap-1 items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
            <div
              className="flex flex-col gap-0.5 items-center justify-center -rotate-12"
            >
              <div className="text-white text-center font-semibold text-[10px] leading-none uppercase" style={{ letterSpacing: "0.02em", fontFamily: "Montserrat-SemiBold, sans-serif" }}>
                Future of
              </div>
              <div className="text-yellow-400 text-left text-5xl font-normal" style={{ fontFamily: "FulltimeScript-Regular, sans-serif" }}>
                Travel
              </div>
              <div className="text-white text-center text-sm leading-none font-normal uppercase" style={{ letterSpacing: "0.02em" }}>
                FOCUS
                <br />
                GROUP
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start flex-1 text-center sm:text-left">
          <div className="text-[28px] leading-none uppercase" style={{ letterSpacing: "0.03em" }}>
            <span className="text-yellow-400">Complimentary </span>
            <span className="text-white">3-DAY/2-NIGHT</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-start">
            <div className="text-white font-bold text-5xl leading-none uppercase" style={{ fontFamily: "Montserrat-Bold, sans-serif" }}>
              VACATION
            </div>
            <div className="text-white text-[38px] leading-none font-normal" style={{ fontFamily: "Brinattan-Regular, sans-serif" }}>
              For Two!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
