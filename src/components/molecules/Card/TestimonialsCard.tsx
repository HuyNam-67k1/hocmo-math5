import clsx from "clsx";

interface WhyYourUsCardProps {
  pcAvatar: string;
  spAvatar?: string;
  name: string;
  point: string;
  starCount: number;
  isSelected: boolean;
  onClick?: () => void;
}

export const TestimonialsCard = (props: WhyYourUsCardProps) => {
  const { point, pcAvatar, name, isSelected, onClick } = props;

  let cardStyle;

  if (isSelected) {
    cardStyle = `
    rounded-2xl
    lg:h-[112px]
    w-full
    lg:w-[461px]
    lg:shadow-[0_10px_20px_0_rgba(20,65,99,0.15)]
    flex
    items-center
    font-normal
    lg:p-[16px]
    lg:mb-[16px]
    lg:ml-0
    w-[64px]
    `;
  } else {
    cardStyle = `
    lg:h-[106px]
    w-full
    lg:w-[428px]
    flex
    items-center
    font-normal
    lg:p-[16px]
    lg:mb-[16px]
    opacity-50
    lg:mx-auto
    w-[48px]
    `;
  }

  return (
    <section
      className={clsx(cardStyle, "cursor-pointer")}
      onClick={() => onClick?.()}
    >
      <img
        src={pcAvatar}
        alt=""
        className={clsx(
          "lg:rounded-lg rounded-full",
          { "h-[64px] w-[64px] lg:h-[80px] lg:w-[80px]": isSelected },
          { "h-[48px] w-[48px] lg:h-[74px] lg:w-[74px]": !isSelected },
          { "border-2 border-white lg:border-0": isSelected }
        )}
      />
      <div className={"ml-[24px] hidden lg:block"}>
        <p className={"text-2xl text-[#424242] mt-[8px]"}>{name}</p>
        <p className={"text-xl text-[#424242] mt-[8px]"}>{point}</p>
      </div>
    </section>
  );
};
