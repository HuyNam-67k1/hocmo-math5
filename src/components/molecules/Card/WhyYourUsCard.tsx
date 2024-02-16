import Image from "next/image";

interface WhyYourUsCardProps {
  src: string;
  alt: string;
  html: string;
  className?: string;
}

const WhyYourUsCard = (props: WhyYourUsCardProps) => (
  <div
    className={`
      col-span-6 md:col-span-3
      relative
      h-[90px] lg:h-[102px]
      ${props.className}
    `}
  >
    <Image
      className={`h-[40px] w-[40px] md:h-[60px] md:w-[60px] absolute
        top-0 left-[50%] translate-y-[-50%] translate-x-[-50%]
      `}
      width={40}
      height={40}
      src={props.src}
      alt={props.alt}
    />
    <div
      className={` h-full border border-[#07385C] rounded-2xl 
        text-center text-sm lg:text-xl font-medium text-[#424242] px-2 pt-6 md:pt-8
      `}
    >
      <span dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
  </div>
);

export default WhyYourUsCard;
