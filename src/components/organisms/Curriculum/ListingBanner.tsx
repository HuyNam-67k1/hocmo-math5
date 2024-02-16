"use client";

import React from "react";
import Image from "next/image";

const ListingBanner = () => {
  return (
    <div className=" xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
      <div className="relative h-[378px] grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="mt-6 lg:mt-20">
          <div className="text-[#07375C] md:text-[40px] sm:text-[16px] font-semibold">
            Chương Trình Toán Lớp 5<br />
            <span className="text-[#219b67]">Theo Bộ Giáo Dục</span>
          </div>
          <div className="mt-4 lg:text-[22px] sm:text-[16px] text-[#9E9E9E]">
            Học Mở biên soạn bài giảng bám sát với chương trình của{" "}
            <br className="hidden md:block" />
            Bộ Giáo Dục, giúp học viên đạt thành tích học tập cao nhất.
          </div>
        </div>

        <Image
          src="/images/portrait-banner.png"
          alt="moet-listing-course"
          className="lg:w-[282px] sm:w-[200px] lg:m-auto sm:m-auto w-[160px] m-auto"
          width={282}
          height={282}
        />
      </div>
    </div>
  );
};

export default ListingBanner;
