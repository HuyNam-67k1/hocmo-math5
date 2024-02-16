"use client";

import { ROUTES } from "@/utils/constans";
import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="w-full rounded-3xl bg-[#fff] relative overflow-hidden">
      <div className="overflow-hidden relative">
        <Image
          src="/images/img-toan-ldb.png"
          alt={"img-toan"}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <a href={`${ROUTES.LEARNING_DASHBOARD}/${ROUTES.TOAN5}`}>
        <div className="p-[16px_24px_0] lg:p-[16px_16px_0] cursor-pointer">
          <div className="flex justify-between h-[46px]">
            <div>
              <p className="p-[4px_8px] text-[#1F91C6] text-xs bg-[#F0F7FF]">
                Bộ giáo dục
              </p>
              <p className="text-[12px] mt-2">2023 - 2024</p>
            </div>
            <div
              className={`
            bg-[#FEF9EC]
            border-2 border-[#FFEDBD]
            rounded
            p-[4px_6px]
            text-center
            text-[12px] leading-[16px]
          `}
            >
              <p className="text-[#9B9B9B]">Lớp</p>
              <p className="text-[14px] leading-[20px] font-semibold text-[#000000]">
                5
              </p>
            </div>
          </div>
          <p
            className={`
          text-[18px] leading-[20px]
          font-medium
          lg:mt-[24px] mt-[15px] pb-[24px]
          text-[#07385C]
          h-[44px]
          truncate
        `}
          >
            Môn Toán Lớp 5
          </p>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
