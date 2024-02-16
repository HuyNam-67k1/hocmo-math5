"use client";

import Image from "@/components/atoms/Image";

const GradeTag = () => {
  return (
    <div className="text-xs lg:text-lg rounded-md text-[#1f91c6] font-medium bg-[#f0f7ff] border-1 py-[2px] px-1.5 border border-[#1f91c6]">
      Lớp 5
    </div>
  );
};

const CurriculumCard = () => {
  return (
    <div className="rounded-3xl text-center lg:w-[300px] w-[250px] h-full lg:h-full bg-[#ffffff] pb-2 border-2 border-[#e1e3e2] hover:border-2 hover:border-[#5eacd0] shadow-lg hover:shadow-2xl">
      <div className="relative">
        <Image
          src="/images/toan-5.png"
          alt="toan-5"
          fallback="/toan-5.png"
          ratio={0.67}
          className="rounded-t-3xl"
        />
        <header className="flex justify-between items-start mb-2 p-4 mx-2 mt-2">
          <div>
            <div className="text-xs lg:text-lg bg-[#e9f9f2] text-[#219b67] rounded-md px-2 py-1 font-medium">
              Bộ Giáo Dục
            </div>
            <p className="text-[12px] lg:text-[16px] ml-2 mt-2 h-[18px] text-left text-[#868585]">
              2023-2024
            </p>
          </div>
          <GradeTag />
        </header>
      </div>
      <article className="px-6 py-2">
        <h3 className="lg:text-[28px] text-[24px] text-left lg:h-12 h-10 line-clamp-2 font-semibold text-[#07375C]">
          Toán Học Lớp 5
        </h3>
      </article>
    </div>
  );
};

export default CurriculumCard;
