"use client";

import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  className?: string;
  title?: any;
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
      <p className="text-[#9B9B9B] text-[22px] mt-[20px] mx-auto text-center ">
        {title || "Không có khoá học nào!"}
      </p>
    </div>
  );
};
