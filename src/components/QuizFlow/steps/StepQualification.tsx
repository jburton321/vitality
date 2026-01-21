import { Check, Clock, Video, Calendar } from "lucide-react";

interface StepQualificationProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  marketingConsent: boolean;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onMarketingConsentChange: (value: boolean) => void;
}

const benefits = [
  { text: "Session Length: 30-45 minutes" },
  { text: "Hosted online" },
  { text: "Easy to schedule" },
];

export const StepQualification = ({
  firstName,
  lastName,
  email,
  phone,
  marketingConsent,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  onMarketingConsentChange,
}: StepQualificationProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="text-center">
        <h2
          className="text-blue-900 text-center font-bold text-fluid-3xl uppercase mb-3"
          style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
        >
          You Qualify to Participate
        </h2>
        <p
          className="text-gray-700 text-fluid-base max-w-md mx-auto"
          style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
        >
          Complete the survey and attend a short online session and you'll receive a complimentary 3-Day, 2-Night Vacation.
        </p>
      </div>

      <div className="w-full max-w-md bg-green-50 rounded-xl p-4">
        <div className="flex flex-col gap-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-600 shrink-0" />
              <span
                className="text-gray-700 text-fluid-sm"
                style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
              >
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-700 font-medium text-fluid-sm"
              style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
            >
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => onFirstNameChange(e.target.value)}
              placeholder="Your first name"
              className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-800 text-fluid-base focus:border-blue-600 focus:outline-none transition-colors"
              style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-700 font-medium text-fluid-sm"
              style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
            >
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => onLastNameChange(e.target.value)}
              placeholder="Your last name"
              className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-800 text-fluid-base focus:border-blue-600 focus:outline-none transition-colors"
              style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-gray-700 font-medium text-fluid-sm"
            style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your@email.com"
            className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-800 text-fluid-base focus:border-blue-600 focus:outline-none transition-colors"
            style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-gray-700 font-medium text-fluid-sm"
            style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
          >
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-800 text-fluid-base focus:border-blue-600 focus:outline-none transition-colors"
            style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
          />
        </div>
        <label className="flex items-start gap-3 cursor-pointer mt-2">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => onMarketingConsentChange(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
          />
          <span
            className="text-gray-600 text-fluid-sm"
            style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
          >
            I agree to receive promotional communications from Vitality Vacations and its affiliates.
          </span>
        </label>
      </div>
    </div>
  );
};
