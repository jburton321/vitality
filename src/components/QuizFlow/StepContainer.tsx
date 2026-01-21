interface StepContainerProps {
  children: React.ReactNode;
  step: number;
  totalSteps: number;
}

export const StepContainer = ({ children, step, totalSteps }: StepContainerProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-0 items-center justify-start w-full">
      <div className="w-full mb-6">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-gray-600 text-fluid-sm font-medium"
            style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
          >
            Step {step} of {totalSteps}
          </span>
          <span
            className="text-gray-600 text-fluid-sm font-medium"
            style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
          >
            {Math.round((step / totalSteps) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>
      <div className="w-full animate-fadeIn">
        {children}
      </div>
    </div>
  );
};
