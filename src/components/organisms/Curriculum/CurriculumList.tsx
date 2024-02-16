"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import CurriculumCard from "./CurriculumCard";
import { ROUTES } from "@/utils/constans";
import CurvedLine from "@/components/atoms/curved-line";

const CurriculumList = () => {
  return (
    <div className="justify-center bg-[#DFF2FD] xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
      <div id="toan-5" className="pt-[16px] lg:pb-[60px] pb-[40px]">
        <div className="text-center">
          <CurvedLine
            size="sm"
            color="#28A06D"
            className="text-[#07375C] font-semibold lg:text-[32px] text-xl relative"
          >
            <>
              Khoá học chất lượng{" "}
              <span className="text-[#28A06D]">tìm hiểu ngay</span>
              <Icon
                type="beard"
                className="absolute right-[-20px] top-[-12px]"
              />
            </>
          </CurvedLine>
        </div>
        <section className="lg:mt-[60px] mt-[34px] flex justify-center lg:mx-[220px] mx-0">
          <Link passHref href={`${ROUTES.COURSE}${ROUTES.CURRICULUM_DETAIL}`}>
            <CurriculumCard />
          </Link>
        </section>
      </div>
    </div>
  );
};
export default CurriculumList;
