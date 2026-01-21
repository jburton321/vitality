import { MultiChoice } from "../MultiChoice";

interface StepJobProps {
  value: string;
  onSelect: (value: string) => void;
}

const jobOptions = [
  { value: "employed", label: "Gainfully Employed" },
  { value: "retired", label: "Happily Retired" },
  { value: "not-working", label: "Not Currently Working" },
];

export const StepJob = ({ value, onSelect }: StepJobProps): JSX.Element => {
  return (
    <MultiChoice
      title="What's Your Employment Status?"
      options={jobOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
