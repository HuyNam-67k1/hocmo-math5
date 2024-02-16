"use client";

import Image from "next/image";

interface Props {
  className?: string;
  title?: string;
}

export const FindNotFound = (props: Props) => {
  const { className, title } = props;

  return (
    <div className={className}>
      <Image
        src="/images/find-not-found.png"
        alt="Find not found"
        className="max-w-[120px] mx-auto"
        width={120}
        height={120}
      />
      <p className="text-[#9B9B9B] text-[16px] mt-[16px] mx-auto text-center">
        {title}
      </p>
    </div>
  );
};
