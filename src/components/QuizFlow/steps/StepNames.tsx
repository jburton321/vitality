interface StepNamesProps {
  firstName: string;
  lastName: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
}

export const StepNames = ({ firstName, lastName, onFirstNameChange, onLastNameChange }: StepNamesProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <h2
        className="text-blue-900 text-center font-bold text-fluid-2xl uppercase"
        style={{ fontFamily: "Montserrat-Bold, sans-serif" }}
      >
        Spouse/Partner Information
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col gap-2">
          <label
            className="text-gray-700 font-medium text-fluid-base"
            style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
          >
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => onFirstNameChange(e.target.value)}
            placeholder="Enter first name"
            className="w-full py-4 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-800 text-fluid-base focus:border-blue-600 focus:outline-none transition-colors"
            style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-gray-700 font-medium text-fluid-base"
            style={{ fontFamily: "Montserrat-SemiBold, sans-serif" }}
          >
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
            placeholder="Enter last name"
            className="w-full py-4 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-800 text-fluid-base focus:border-blue-600 focus:outline-none transition-colors"
            style={{ fontFamily: "Montserrat-Regular, sans-serif" }}
          />
        </div>
      </div>
    </div>
  );
};
