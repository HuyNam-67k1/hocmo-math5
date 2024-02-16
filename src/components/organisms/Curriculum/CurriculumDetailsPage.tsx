"use client";

import React, { useMemo } from "react";
import { BreadCrumbs, CrumbProps } from "@/components/atoms/BreadCrumbs";
import { ROUTES } from "@/utils/constans";
import DetailBanner from "./DetailsBanner";

function buildBreadCrumbs(): CrumbProps[] {
  const result = [
    {
      name: "Trang Chủ",
      url: ROUTES.HOME,
    },
    {
      name: "Lớp 5",
      url: "/khoa-hoc",
    },
    {
      name: "Toán Học Lớp 5",
      url: ``,
    },
  ];

  return result;
}

const CurriculumDetailsPage = () => {
  const breadCrumbs = useMemo(() => buildBreadCrumbs(), []);

  return (
    <React.Fragment>
      <DetailBanner />
      <div className="lg:pt-[22px] xl:py-8 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
        <div className=" md:block">
          <BreadCrumbs crumbs={breadCrumbs} />
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-5 lg:col-span-3 lg:order-first order-last"></div>
          <div className="col-span-5 lg:col-span-2" id="sCourseTeachers"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurriculumDetailsPage;
