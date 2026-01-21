import { Clock } from "lucide-react";
import { ButtonPrimaryStateV1 } from "../ButtonPrimaryStateV1/ButtonPrimaryStateV1";

export const Survey = (): JSX.Element => {
  return (
    <section
      className="py-8 sm:py-12 flex flex-col gap-2 items-center justify-center w-full"
      style={{
        background: "url(/bck.jpg) center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-0 items-center justify-start w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch justify-start w-full">
          <article
            className="bg-gray-100 bg-opacity-75 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 flex flex-col gap-6 sm:gap-8 items-center justify-center flex-1"
            style={{ backdropFilter: "blur(30px)" }}
          >
            <div className="flex flex-col gap-0 items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center">
                  <div
                    className="text-black text-center font-bold text-fluid-2xl uppercase"
                    style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
                  >
                    Answer
                  </div>
                  <div
                    className="text-blue-600 text-center font-bold text-fluid-2xl uppercase"
                    style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
                  >
                    5 Quick questions
                  </div>
                </div>
                <div
                  className="text-black text-center text-fluid-2xl font-normal uppercase"
                  style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
                >
                  to see if you qualify for
                  <br />
                  our Future of Travel
                </div>
                <div
                  className="text-blue-900 text-center text-fluid-5xl font-normal"
                  style={{ fontFamily: "'Brinattan-Regular', cursive" }}
                >
                  Couple&#039;s Focus Group
                </div>
              </div>
              <div className="border-solid border-gray-300 border py-2 sm:py-3 flex flex-row gap-2 items-center justify-center w-full mt-3 sm:mt-4">
                <div
                  className="text-black text-center font-normal text-fluid-base px-2 sm:px-4"
                  style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
                >
                  Choose from U.S., Canada, or Mexico destinations
                </div>
              </div>
              <div
                className="bg-white bg-opacity-35 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-start w-full mt-3 sm:mt-4"
                style={{ backdropFilter: "blur(15px)" }}
              >
                <img
                  className="rounded-lg sm:rounded-xl w-full sm:flex-1 aspect-destination object-cover"
                  src="rectangle-60.png"
                  alt="Destination 1"
                />
                <img
                  className="rounded-lg sm:rounded-xl w-full sm:flex-1 aspect-destination object-cover"
                  src="rectangle-239010.png"
                  alt="Destination 2"
                />
                <img
                  className="rounded-lg sm:rounded-xl w-full sm:flex-1 aspect-destination object-cover"
                  src="rectangle-239020.png"
                  alt="Destination 3"
                />
              </div>
              <div className="pt-6 sm:pt-8 flex flex-col gap-4 sm:gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-2 items-center justify-center w-full">
                  <div className="bg-white flex-1 h-0.5 sm:h-1"></div>
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 px-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                    <div
                      className="text-black text-left font-semibold text-fluid-lg leading-relaxed whitespace-nowrap"
                      style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
                    >
                      Survey time: 2 minutes
                    </div>
                  </div>
                  <div className="bg-white flex-1 h-0.5 sm:h-1"></div>
                </div>
                <ButtonPrimaryStateV1 className="!bg-yellow-400 !w-full !min-h-[44px] sm:!h-14"></ButtonPrimaryStateV1>
              </div>
            </div>
          </article>
          <img
            className="hidden lg:block flex-1 w-full self-stretch object-cover"
            src="frame-4273216650.png"
            alt="Vacation imagery"
          />
        </div>
      </div>
    </section>
  );
};
