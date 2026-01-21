export const Hero = (): JSX.Element => {
  return (
    <section
      className="w-full px-4 sm:px-6 py-6 bg-cover bg-center"
      style={{
        backgroundImage: "url(/frame-4273216680.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-start max-w-7xl mx-auto px-4 sm:px-6 py-6 rounded-lg" style={{
        background: "linear-gradient(90deg, rgba(7, 29, 78, 1.00) 0%, rgba(57, 108, 177, 1.00) 100%)"
      }}>
        <img
          src="/stamp.png"
          alt="Future of Travel Focus Group"
          className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 object-contain"
        />
        <div className="flex flex-col gap-2 items-start justify-start flex-1 text-center sm:text-left">
          <div className="text-[28px] leading-none uppercase" style={{ letterSpacing: "0.03em" }}>
            <span className="text-yellow-400">Complimentary </span>
            <span className="text-white">3-DAY/2-NIGHT</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-start">
            <div className="text-white font-bold text-5xl leading-none uppercase" style={{ fontFamily: "Montserrat-Bold, sans-serif" }}>
              VACATION
            </div>
            <div className="text-white text-[38px] leading-none font-normal" style={{ fontFamily: "'Brinattan-Regular', cursive" }}>
              For Two!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
