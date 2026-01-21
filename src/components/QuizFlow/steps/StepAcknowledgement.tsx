import { Check } from "lucide-react";

interface Acknowledgements {
  attendWithSpouse: boolean;
  completeSession: boolean;
  meetCriteria: boolean;
}

interface StepAcknowledgementProps {
  acknowledgements: Acknowledgements;
  onAcknowledgementChange: (key: keyof Acknowledgements, value: boolean) => void;
  firstName: string;
}

const acknowledgementItems = [
  {
    key: "attendWithSpouse" as const,
    label: "I will attend the session with my spouse/partner.",
  },
  {
    key: "completeSession" as const,
    label: "I understand the full session must be completed to receive my travel certificate.",
  },
  {
    key: "meetCriteria" as const,
    label: "I meet the program criteria: over 30, coupled, and a primary credit card holder.",
  },
];

export const StepAcknowledgement = ({
  acknowledgements,
  onAcknowledgementChange,
  firstName,
}: StepAcknowledgementProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="text-center">
        <h2
          className="text-blue-900 text-center font-bold text-fluid-3xl uppercase mb-2"
          style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
        >
          Thank You, {firstName || "Guest"}!
        </h2>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {acknowledgementItems.map((item) => (
          <label
            key={item.key}
            className={`
              flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
              ${acknowledgements[item.key]
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300 bg-white hover:border-blue-400"
              }
            `}
          >
            <div
              className={`
                w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors
                ${acknowledgements[item.key]
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white border-gray-400"
                }
              `}
            >
              {acknowledgements[item.key] && (
                <Check className="w-4 h-4 text-white" />
              )}
            </div>
            <input
              type="checkbox"
              checked={acknowledgements[item.key]}
              onChange={(e) => onAcknowledgementChange(item.key, e.target.checked)}
              className="sr-only"
            />
            <span
              className="text-gray-700 text-fluid-base"
              style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
            >
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
