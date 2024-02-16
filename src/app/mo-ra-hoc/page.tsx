"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/organisms/Layout/Sidebar";
import { LDBCourseListing } from "@/components/organisms/LDBCourses/LDBCourseListing";
import { LDBCoursesTimetable } from "@/components/organisms/LDBCourses/LDBCoursesTimetable";
import Header from "@/components/organisms/Layout/Header";

const sideBarMenus = [
  {
    title: "Khoá học của bạn",
    children: [
      {
        code: "in-progress-course",
        icon: "activity" as Icon,
        activeIcon: "activityFill" as Icon,
        label: "Khoá học đang diễn ra",
      },
    ],
  },
];

const LDBCourseListingPage = () => {
  const [active, setActive] = useState("in-progress-course");

  const onClick = (code: string) => {
    setActive(code);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-56px)] ">
        <div className="hidden lg:block lg:flex-[0_0_250px]">
          <Sidebar menus={sideBarMenus} active={active} />
        </div>
        <div className="flex-1 rounded-tl-[24px] bg-[#f9f9f9]">
          <LDBCourseListing />
        </div>
        <div className="hidden md:block md:flex-[0_0_408px] p-6 bg-[#f9f9f9]">
          <LDBCoursesTimetable className="sticky top-[88px] overflow-hidden shadow-md rounded-[24px] max-w-[400px] mx-auto bg-white max-h-[calc(100vh-116px)]" />
        </div>
      </div>
    </>
  );
};

export default LDBCourseListingPage;
