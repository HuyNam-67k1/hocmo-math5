"use client";

import clsx from "clsx";
import Button from "@/components/atoms/button";
import { ROUTES } from "@/utils/constans";
import Image from "next/image";

interface Props {
  className?: string;
  onClose?: () => void;
}

export const LDBCoursesGoToWebEcom = (props: Props) => {
  const { className, onClose = () => undefined } = props;

  return (
    <div className={clsx("relative text-[#000]", className)}>
      <Image
        src="/images/book.png"
        alt="book.png"
        className="w-[162px] absolute top-[-28px]"
        width={162}
        height={162}
      />
      <div className="mt-[40px] bg-[#F2F6F4] rounded-[8px] p-[16px]">
        <p className="font-semibold mt-[76px]">Có nhiều khóa học</p>
        <p className="text-xs">đang diễn ra!!</p>
        <a
          href={ROUTES.COURSE}
          onClick={onClose}
          rel="noreferrer"
        >
          <Button className="mt-[16px]" buttonType="primary">
            Đăng ký ngay
          </Button>
        </a>
      </div>
    </div>
  );
};
