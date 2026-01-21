import { Check } from "lucide-react";

interface MultiChoiceOption {
  value: string;
  label: string;
}

interface MultiChoiceProps {
  title: string;
  options: MultiChoiceOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export const MultiChoice = ({ title, options, selectedValue, onSelect }: MultiChoiceProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <h2
        className="text-blue-900 text-center font-bold text-fluid-2xl uppercase"
        style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3 w-full max-w-md">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className={`
              w-full py-4 px-6 rounded-lg border-2 transition-all duration-200 flex items-center justify-between
              ${selectedValue === option.value
                ? "border-blue-600 bg-blue-50 text-blue-900"
                : "border-gray-300 bg-white hover:border-blue-400 hover:bg-gray-50 text-gray-800"
              }
            `}
          >
            <span
              className="text-fluid-lg font-medium"
              style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
            >
              {option.label}
            </span>
            {selectedValue === option.value && (
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
