import { Check } from "lucide-react";

interface Acknowledgements {
  attendWithSpouse: boolean;
  completeSession: boolean;
  meetCriteria: boolean;
}

interface StepAcknowledgementProps {
  acknowledgements: Acknowledgements;
  onAcknowledgementChange: (key: keyof Acknowledgements, value: boolean) => void;
}

const acknowledgementItems = [
  {
    key: "attendWithSpouse" as const,
    label: "I confirm that I will attend the presentation with my spouse/partner.",
  },
  {
    key: "completeSession" as const,
    label: "I agree to complete the full 90-minute presentation session.",
  },
  {
    key: "meetCriteria" as const,
    label: "I confirm that I meet all eligibility criteria for this program.",
  },
];

export const StepAcknowledgement = ({
  acknowledgements,
  onAcknowledgementChange,
}: StepAcknowledgementProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="text-center">
        <h2
          className="text-blue-900 text-center font-bold text-fluid-2xl uppercase mb-2"
          style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
        >
          Almost There!
        </h2>
        <p
          className="text-gray-600 text-fluid-base"
          style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
        >
          Please confirm the following to proceed with your booking
        </p>
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
