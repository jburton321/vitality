import { MultiChoice } from "../MultiChoice";

interface StepTravelProps {
  value: string;
  onSelect: (value: string) => void;
}

const travelOptions = [
  { value: "spouse", label: "My spouse or partner" },
  { value: "spouse-children", label: "My spouse/partner & children" },
  { value: "friends", label: "I vacation with friends" },
  { value: "alone", label: "I travel alone" },
];

export const StepTravel = ({ value, onSelect }: StepTravelProps): JSX.Element => {
  return (
    <MultiChoice
      title="Who Do You Usually Travel With?"
      options={travelOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
