import { MultiChoice } from "../MultiChoice";

interface StepPaymentProps {
  value: string;
  onSelect: (value: string) => void;
}

const paymentOptions = [
  { value: "credit-card", label: "With a major credit card (Visa, Mastercard, Amex, Discover)" },
  { value: "cash-debit", label: "With cash or debit card" },
];

export const StepPayment = ({ value, onSelect }: StepPaymentProps): JSX.Element => {
  return (
    <MultiChoice
      title="How Do You Normally Book Travel?"
      options={paymentOptions}
      selectedValue={value}
      onSelect={onSelect}
    />
  );
};
