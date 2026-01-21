import { MultiChoice } from "../MultiChoice";

interface StepTravelProps {
  value: string;
  onSelect: (value: string) => void;
}

const travelOptions = [
  { value: "spouse", label: "Spouse/Partner" },
  { value: "spouse-children", label: "Spouse/Partner & Children" },
  { value: "friends", label: "Friends" },
  { value: "alone", label: "Alone" },
];

export const StepTravel = ({ value, onSelect }: StepTravelProps): JSX.Element => {
  return (
    <MultiChoice
      title="Who do you typically travel with?"
      options={travelOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
