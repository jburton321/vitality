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
      title="Do You Own or Rent Your Home?"
      options={housingOptions}
      selectedValue={value}
      onSelect={onSelect}
      image="/step4.png"
    />
  );
};
