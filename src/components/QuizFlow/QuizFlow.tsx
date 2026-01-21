import { useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { StepContainer } from "./StepContainer";
import { FormData, initialFormData } from "./types";
import {
  StepAge,
  StepTravel,
  StepNames,
  StepHousing,
  StepJob,
  StepPayment,
  StepQualification,
  StepAcknowledgement,
  StepScheduler,
  StepThankYou,
} from "./steps";

interface QuizFlowProps {
  onBack?: () => void;
}

export const QuizFlow = ({ onBack }: QuizFlowProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const totalSteps = 10;

  const updateFormData = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (onBack) {
      onBack();
    }
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 1:
        return !!formData.age;
      case 2:
        return !!formData.travel;
      case 3:
        return !!formData.spouseFirstName && !!formData.spouseLastName;
      case 4:
        return !!formData.housing;
      case 5:
        return !!formData.employment;
      case 6:
        return !!formData.payment;
      case 7:
        return !!formData.firstName && !!formData.lastName && !!formData.email && !!formData.phone;
      case 8:
        return (
          formData.acknowledgements.attendWithSpouse &&
          formData.acknowledgements.completeSession &&
          formData.acknowledgements.meetCriteria
        );
      case 9:
        return !!formData.scheduledDate && !!formData.scheduledTime;
      case 10:
        return true;
      default:
        return false;
    }
  };

  const getButtonText = (): string => {
    switch (currentStep) {
      case 7:
        return "RESERVE MY SPOT";
      case 8:
        return "PROCEED TO SCHEDULE";
      case 9:
        return "SCHEDULE APPOINTMENT";
      case 10:
        return "";
      default:
        return "NEXT";
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepAge
            value={formData.age}
            onSelect={(value) => updateFormData("age", value)}
          />
        );
      case 2:
        return (
          <StepTravel
            value={formData.travel}
            onSelect={(value) => updateFormData("travel", value)}
          />
        );
      case 3:
        return (
          <StepNames
            firstName={formData.spouseFirstName}
            lastName={formData.spouseLastName}
            onFirstNameChange={(value) => updateFormData("spouseFirstName", value)}
            onLastNameChange={(value) => updateFormData("spouseLastName", value)}
          />
        );
      case 4:
        return (
          <StepHousing
            value={formData.housing}
            onSelect={(value) => updateFormData("housing", value)}
          />
        );
      case 5:
        return (
          <StepJob
            value={formData.employment}
            onSelect={(value) => updateFormData("employment", value)}
          />
        );
      case 6:
        return (
          <StepPayment
            value={formData.payment}
            onSelect={(value) => updateFormData("payment", value)}
          />
        );
      case 7:
        return (
          <StepQualification
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            phone={formData.phone}
            marketingConsent={formData.marketingConsent}
            onFirstNameChange={(value) => updateFormData("firstName", value)}
            onLastNameChange={(value) => updateFormData("lastName", value)}
            onEmailChange={(value) => updateFormData("email", value)}
            onPhoneChange={(value) => updateFormData("phone", value)}
            onMarketingConsentChange={(value) => updateFormData("marketingConsent", value)}
          />
        );
      case 8:
        return (
          <StepAcknowledgement
            acknowledgements={formData.acknowledgements}
            onAcknowledgementChange={(key, value) =>
              updateFormData("acknowledgements", { ...formData.acknowledgements, [key]: value })
            }
            firstName={formData.firstName}
          />
        );
      case 9:
        return (
          <StepScheduler
            selectedDate={formData.scheduledDate}
            selectedTime={formData.scheduledTime}
            onDateSelect={(value) => updateFormData("scheduledDate", value)}
            onTimeSelect={(value) => updateFormData("scheduledTime", value)}
          />
        );
      case 10:
        return <StepThankYou firstName={formData.firstName} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white flex flex-col gap-0 justify-start relative z-10">
        <Navbar />
        <div className="sm:hidden w-full relative">
          <img
            src="/frame-4273216650.png"
            alt="Beach sunset"
            className="w-full h-auto object-cover aspect-video"
          />
          <img
            src="/stamp.png"
            alt="Future of Travel Focus Group"
            className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-32 h-32 z-10"
          />
        </div>
        <main className="w-full flex flex-col items-center flex-1">
          <section className="w-full bg-gradient-to-r from-blue-900 to-blue-600 px-4 sm:px-6 pt-20 sm:pt-4 pb-4 sm:py-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-start max-w-7xl mx-auto">
              <img
                src="/stamp.png"
                alt="Future of Travel Focus Group"
                className="hidden sm:block w-28 h-28 md:w-32 md:h-32 shrink-0 object-contain"
              />
              <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start justify-start flex-1 text-center sm:text-left">
                <div
                  className="text-fluid-hero leading-none uppercase"
                  style={{ letterSpacing: "0.03em" }}
                >
                  <span className="text-yellow-400 block sm:inline mb-1 sm:mb-0">Complimentary</span>
                  <span className="text-white"> 3-DAY/2-NIGHT</span>
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
                  className="bg-gray-100 bg-opacity-75 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 flex flex-col gap-6 sm:gap-8 items-center justify-start flex-1"
                  style={{ backdropFilter: "blur(30px)" }}
                >
                  <StepContainer step={currentStep} totalSteps={totalSteps}>
                    {renderStep()}
                  </StepContainer>

                  {currentStep < 10 && (
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex-1 py-4 px-6 rounded-lg border-2 border-gray-400 bg-white text-gray-700 font-semibold text-fluid-base hover:bg-gray-50 transition-colors"
                          style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
                        >
                          BACK
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canProceed()}
                        className={`
                          btn-pulse flex-1 py-4 px-6 flex items-center justify-center relative overflow-hidden transition-all duration-300
                          ${canProceed()
                            ? "bg-yellow-400 text-white cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }
                        `}
                      >
                        {canProceed() && (
                          <>
                            <span className="btn-pulse-line btn-pulse-line-top absolute pointer-events-none"></span>
                            <span className="btn-pulse-line btn-pulse-line-right absolute pointer-events-none"></span>
                            <span className="btn-pulse-line btn-pulse-line-bottom absolute pointer-events-none"></span>
                            <span className="btn-pulse-line btn-pulse-line-left absolute pointer-events-none"></span>
                          </>
                        )}
                        <span
                          className="font-bold text-fluid-xl uppercase relative z-10"
                          style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
                        >
                          {getButtonText()}
                        </span>
                      </button>
                    </div>
                  )}
                </article>
                <img
                  className="hidden lg:block flex-1 w-full self-stretch object-cover"
                  src="/frame-4273216650.png"
                  alt="Vacation imagery"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
