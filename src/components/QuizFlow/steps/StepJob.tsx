import { MultiChoice } from "../MultiChoice";

interface StepJobProps {
  value: string;
  onSelect: (value: string) => void;
}

const jobOptions = [
  { value: "employed", label: "Employed" },
  { value: "retired", label: "Retired" },
  { value: "not-working", label: "Not Working" },
];

export const StepJob = ({ value, onSelect }: StepJobProps): JSX.Element => {
  return (
    <MultiChoice
      title="What is your employment status?"
      options={jobOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
