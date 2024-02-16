"use client";

import { Grid } from "marathon-design-system";

import {
  LDBWelcome,
  TimetableFloatingBtn,
} from "@/components/organisms/LDBCourses/LDBCoursesTimetable";
import CurriculumCard from "../Curriculum/CurriculumCard";
import { ROUTES } from "@/utils/constans";

const CourseItems = () => {
  return (
    <Grid col={{ sm: 1, md: 2, xl: 3, hg: 5 }} gutter={32}>
      <a href={`${ROUTES.LEARNING_DASHBOARD}/${ROUTES.TOAN5}`}>
        <CurriculumCard />
      </a>
    </Grid>
  );
};

export const LDBCourseListing = () => {
  return (
    <div className="w-full">
      <div className="block md:hidden">
        <div className="h-[132px]">
          <LDBWelcome />
        </div>

        <TimetableFloatingBtn />
      </div>
      <div className="hidden md:block pt-6 pl-6">
        <>
          <div className="pl-20 pt-10 pb-20 text-3xl font-semibold text-[#07375C]">
            Khoá học&nbsp;<span className="text-[#1F91C6]">đang diễn ra</span>
          </div>

          <div className="ml-[200px]">
            <CourseItems />
          </div>
        </>
      </div>
    </div>
  );
};
