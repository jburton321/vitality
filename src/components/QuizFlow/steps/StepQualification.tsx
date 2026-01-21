import { Check, Gift, Calendar, MapPin, Users } from "lucide-react";

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
  { icon: Gift, text: "Complimentary 3-Day/2-Night Vacation" },
  { icon: MapPin, text: "Choose from U.S., Canada, or Mexico" },
  { icon: Users, text: "Exclusive Focus Group Experience" },
  { icon: Calendar, text: "Flexible Scheduling Options" },
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
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
          <Check className="w-5 h-5" />
          <span
            className="font-semibold text-fluid-base"
            style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
          >
            Congratulations!
          </span>
        </div>
        <h2
          className="text-blue-900 text-center font-bold text-fluid-3xl uppercase"
          style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
        >
          You Qualify to Participate
        </h2>
      </div>

      <div className="w-full max-w-md bg-blue-50 rounded-xl p-4">
        <h3
          className="text-blue-900 font-semibold text-fluid-base mb-3"
          style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
        >
          Your Benefits Include:
        </h3>
        <div className="flex flex-col gap-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <benefit.icon className="w-5 h-5 text-blue-600 shrink-0" />
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
            Email Address
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
            Phone Number
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
            I agree to receive promotional offers and updates about exclusive vacation deals via email and phone.
          </span>
        </label>
      </div>
    </div>
  );
};
