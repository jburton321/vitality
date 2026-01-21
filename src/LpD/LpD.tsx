import { ButtonPrimaryStateV1 } from "../ButtonPrimaryStateV1/ButtonPrimaryStateV1";

export interface ILpDProps {
  className?: string;
}

export const LpD = ({ className, ...props }: ILpDProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative overflow-hidden " +
        className
      }
    >
      <div className="flex flex-row items-center justify-between shrink-0 w-[1170px] h-[90px] relative">
        <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
          <div className="bg-[#ffffff] p-2.5 flex flex-row gap-2.5 items-center justify-start shrink-0 h-[79px] relative">
            <img
              className="border-solid border-[transparent] border shrink-0 w-[101.18px] h-[101.18px] relative"
              style={{ objectFit: "cover" }}
              src="_1024-x-1024-vitality-logo0.png"
            />
          </div>
          <div
            className="text-[#0361c1] text-left font-['Montserrat-ExtraBold',_sans-serif] text-[17px] leading-none font-extrabold uppercase relative"
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            VIRTUAL TRAVEL CLUB SURVEY{" "}
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
          <div
            className="bg-[#fcb814] rounded-2xl shrink-0 w-8 h-8 relative"
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(-1, 1)",
            }}
          >
            <img
              className="h-[auto] absolute left-[50%] top-[50%] overflow-visible"
              style={{ translate: "-50% -50%" }}
              src="phone-enabled0.svg"
            />
          </div>
          <div className="text-left font-['Montserrat-SemiBold',_sans-serif] text-sm font-semibold relative">
            <span>
              <span className="call-to-claim-phone-span">Call to Claim</span>
              <span className="call-to-claim-phone-span2">%PHONE%</span>
            </span>{" "}
          </div>
        </div>
      </div>
      <div
        className="pt-12 pb-12 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative"
        style={{
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 60.64012050628662%,rgba(255, 255, 255, 1.00) 100%)",
          backdropFilter: "blur(4.3px)",
          background: "url(frame-4273216680.png) center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-0 items-center justify-start shrink-0 w-[1200px] relative">
          <div
            className="pt-6 pr-12 pb-6 pl-6 flex flex-row gap-6 items-center justify-start self-stretch shrink-0 relative"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 29, 78, 1.00) 0%,rgba(57, 108, 177, 1.00) 100%)",
            }}
          >
            <div
              className="bg-[#0462c3] rounded-[80px] p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-[120px] h-[120px] relative"
              style={{ boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="rounded-[80px] border-solid border-neutral-white border-2 flex flex-col gap-2.5 items-center justify-center shrink-0 w-[100px] h-[100px] relative">
                <div
                  className="flex flex-col gap-0.5 items-center justify-center shrink-0 relative"
                  style={{
                    transformOrigin: "0 0",
                    transform: "rotate(-12deg) scale(1, 1)",
                  }}
                >
                  <div
                    className="text-[#ffffff] text-center font-['Montserrat-SemiBold',_sans-serif] text-[10px] leading-none font-semibold uppercase relative self-stretch"
                    style={{
                      letterSpacing: "0.02em",
                      transformOrigin: "0 0",
                      transform: "rotate(0deg) scale(1, 1)",
                    }}
                  >
                    Future of{" "}
                  </div>
                  <div className="text-[#fcb814] text-left font-['FulltimeScript-Regular',_sans-serif] text-5xl font-normal relative">
                    Travel{" "}
                  </div>
                  <div
                    className="text-neutral-white text-center font-['-',_sans-serif] text-sm leading-none font-normal uppercase relative self-stretch"
                    style={{
                      letterSpacing: "0.02em",
                      transformOrigin: "0 0",
                      transform: "rotate(0deg) scale(1, 1)",
                    }}
                  >
                    <span>
                      <span className="focus-group-span">
                        FOCUS
                        <br />
                      </span>
                      <span className="focus-group-span2">GROUP</span>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[717px] relative">
              <div
                className="text-left font-['-',_sans-serif] text-[28px] leading-none font-normal uppercase relative self-stretch"
                style={{ letterSpacing: "0.03em" }}
              >
                <span>
                  <span className="complimentary-3-day-2-night-span">
                    Complimentary
                  </span>
                  <br />
                  <span className="complimentary-3-day-2-night-span2">
                    3-DAY/2-NIGHT
                  </span>
                </span>{" "}
              </div>
              <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                <div className="text-[#ffffff] text-left font-['Montserrat-Bold',_sans-serif] text-5xl leading-none font-bold uppercase relative">
                  VACATION{" "}
                </div>
                <div className="text-[#ffffff] text-left font-['Brinattan-Regular',_sans-serif] text-[38px] leading-none font-normal relative">
                  For Two!{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div
              className="bg-[rgba(239,239,239,0.75)] pt-16 pr-12 pb-16 pl-12 flex flex-col gap-8 items-center justify-center flex-1 min-h-[620px] relative"
              style={{ backdropFilter: "blur(30px)" }}
            >
              <div className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <div className="text-[#000000] text-center font-['Montserrat-Bold',_sans-serif] text-2xl font-bold uppercase relative">
                      Answer{" "}
                    </div>
                    <div className="text-[#0361c1] text-center font-['Montserrat-Bold',_sans-serif] text-2xl font-bold uppercase relative">
                      5 Quick questions{" "}
                    </div>
                  </div>
                  <div className="text-[#000000] text-center font-['Montserrat-Regular',_sans-serif] text-2xl font-normal uppercase relative self-stretch">
                    to see if you qualify for
                    <br />
                    our Future of Travel{" "}
                  </div>
                  <div className="text-[#071d4e] text-center font-['Brinattan-Regular',_sans-serif] text-5xl font-normal relative">
                    Couple&#039;s Focus Group{" "}
                  </div>
                </div>
                <div className="border-solid border-grey-30 border pt-3 pb-3 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
                  <div className="text-[#000000] text-center font-['Montserrat-Regular',_sans-serif] text-base font-normal relative w-[450px]">
                    Choose from U.S., Canada, or Mexico destinations{" "}
                  </div>
                </div>
                <div
                  className="bg-[rgba(255,255,255,0.35)] rounded-[15px] p-6 flex flex-row gap-4 items-center justify-start self-stretch shrink-0 relative"
                  style={{ backdropFilter: "blur(15px)" }}
                >
                  <img
                    className="rounded-xl flex-1 h-[124.67px] relative"
                    style={{ objectFit: "cover" }}
                    src="rectangle-60.png"
                  />
                  <img
                    className="rounded-xl flex-1 h-[124.67px] relative"
                    style={{ objectFit: "cover" }}
                    src="rectangle-239010.png"
                  />
                  <img
                    className="rounded-xl flex-1 h-[124.67px] relative"
                    style={{ objectFit: "cover" }}
                    src="rectangle-239020.png"
                  />
                </div>
                <div className="pt-[30px] flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <div className="bg-[#ffffff] flex-1 h-[4.8px] relative"></div>
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                      <img
                        className="shrink-0 w-[20.15px] h-[22.09px] relative overflow-visible"
                        src="timer0.svg"
                      />
                      <div className="text-[#000000] text-left font-['Montserrat-SemiBold',_sans-serif] text-lg leading-[30px] font-semibold relative">
                        Survey time: 2 minutes{" "}
                      </div>
                    </div>
                    <div className="bg-[#ffffff] flex-1 h-[4.8px] relative"></div>
                  </div>
                  <ButtonPrimaryStateV1 className="!bg-[#fcb814] !self-stretch !shrink-0 !h-[52px]"></ButtonPrimaryStateV1>
                </div>
              </div>
            </div>
            <img
              className="flex flex-row gap-2.5 items-center justify-center self-stretch flex-1 relative"
              style={{ objectFit: "cover" }}
              src="frame-4273216650.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#071d4e] pt-12 pb-12 flex flex-col gap-8 items-center justify-center self-stretch shrink-0 relative">
        <img
          className="shrink-0 w-[209px] h-28 relative"
          style={{ objectFit: "cover" }}
          src="rectangle0.png"
        />
        <div className="text-basic-white text-center font-['Roboto-Regular',_sans-serif] text-[13px] leading-[22px] font-normal relative w-[531px]">
          Copyright © 2026 VitalityVacations.com | All rights reserved.
          <br />
          Privacy Policy  | Terms and conditions apply{" "}
        </div>
      </div>
    </div>
  );
};
