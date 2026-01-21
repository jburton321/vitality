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
    <div
      className={
        "bg-gold-500 pt-4 pr-12 pb-4 pl-12 flex flex-row gap-2.5 items-center justify-center relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-[#ffffff] text-center font-['Montserrat-Bold',_sans-serif] text-xl leading-none font-bold uppercase relative">
        {text}{" "}
      </div>
    </div>
  );
};
