export interface IButtonPrimaryStateV1Props {
  text?: string;
  state?: "v-1" | "hover" | "inactive" | "mobile" | "mobile-inactive";
  className?: string;
}

export const ButtonPrimaryStateV1 = ({
  text = "START NOW",
  state = "v-1",
  className,
  ...props
}: IButtonPrimaryStateV1Props): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <button
      type="button"
      className={
        "bg-gold-500 py-3 sm:py-4 px-8 sm:px-12 flex flex-row gap-2.5 items-center justify-center relative min-h-[44px] cursor-pointer touch-target " +
        className +
        " " +
        variantsClassName
      }
    >
      <span className="text-[#ffffff] text-center font-['Montserrat-Bold',_sans-serif] text-fluid-xl leading-none font-bold uppercase relative">
        {text}
      </span>
    </button>
  );
};
