import { MultiChoice } from "../MultiChoice";

interface StepAgeProps {
  value: string;
  onSelect: (value: string) => void;
}

const ageOptions = [
  { value: "under-29", label: "Under 29" },
  { value: "30-35", label: "30 - 35" },
  { value: "36-50", label: "36 - 50" },
  { value: "51+", label: "51+" },
];

export const StepAge = ({ value, onSelect }: StepAgeProps): JSX.Element => {
  return (
    <MultiChoice
      title="What is your age?"
      options={ageOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
