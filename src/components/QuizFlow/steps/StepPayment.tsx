import { MultiChoice } from "../MultiChoice";

interface StepPaymentProps {
  value: string;
  onSelect: (value: string) => void;
}

const paymentOptions = [
  { value: "credit-card", label: "Major Credit Card" },
  { value: "cash-debit", label: "Cash/Debit" },
];

export const StepPayment = ({ value, onSelect }: StepPaymentProps): JSX.Element => {
  return (
    <MultiChoice
      title="Preferred payment method?"
      options={paymentOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
