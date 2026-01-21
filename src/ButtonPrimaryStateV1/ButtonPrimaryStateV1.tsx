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
        "btn-pulse bg-gold-500 py-3 sm:py-4 px-8 sm:px-12 flex flex-row gap-2.5 items-center justify-center relative min-h-[44px] cursor-pointer touch-target transition-all duration-300 overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
    >
      <span className="btn-pulse-line btn-pulse-line-top absolute pointer-events-none"></span>
      <span className="btn-pulse-line btn-pulse-line-right absolute pointer-events-none"></span>
      <span className="btn-pulse-line btn-pulse-line-bottom absolute pointer-events-none"></span>
      <span className="btn-pulse-line btn-pulse-line-left absolute pointer-events-none"></span>
      <span className="text-[#ffffff] text-center font-['Montserrat-Bold',_sans-serif] text-fluid-xl leading-none font-bold uppercase relative z-10">
        {text}
      </span>
    </button>
  );
};
