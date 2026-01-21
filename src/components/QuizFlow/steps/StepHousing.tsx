import { MultiChoice } from "../MultiChoice";

interface StepHousingProps {
  value: string;
  onSelect: (value: string) => void;
}

const housingOptions = [
  { value: "own", label: "Own" },
  { value: "rent", label: "Rent" },
];

export const StepHousing = ({ value, onSelect }: StepHousingProps): JSX.Element => {
  return (
    <MultiChoice
      title="Do you own or rent your home?"
      options={housingOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
