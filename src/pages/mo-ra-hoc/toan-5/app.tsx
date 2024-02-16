"use client";

import React, { useMemo, useState } from "react";
import { LDBCourseDetailBreadcrumb } from "@/components/organisms/LDBCoursesDetail/LDBCourseDetailBreadcrumb";
import LDBCourseDetailLessonContent, {
  LessonContentProps,
} from "@/components/organisms/LDBCoursesDetail/LDBCourseDetailLessonContent";
import { ELearningContainer } from "@/components/templates/Container";
import { LearningDashBoardMasterLayout } from "@/components/templates/LearningDashBoardMasterLayout";
import { ROUTES } from "@/utils/constans";
import Header from "@/components/organisms/Layout/Header";

const LDBCourseDetailPage = (props: any) => {
  const [active, setActive] = useState("lesson-list");
  const [selectedLesson, setSelectedLesson] = useState<LessonContentProps>();

  const crumbs = useMemo(() => {
    if (active === "lesson-list") {
      return [
        {
          name: "Danh sách bài học",
          url: "",
        },
      ];
    }

    return [
      {
        name: "Báo cáo học tập",
        url: `${ROUTES.LEARNING_DASHBOARD}/toan-5`,
      },
    ];
  }, []);

  return (
    <React.Fragment>
      <Header />
      <ELearningContainer className="bg-[#F9F9F9] min-h-[calc(100vh-56px)] pt-[16px] pb-[60px]">
        <LDBCourseDetailBreadcrumb
          crumbs={crumbs}
          setActive={() => {
            setActive("lesson-list");
          }}
        />
        <LDBCourseDetailLessonContent
          selectedLesson={selectedLesson}
          setSelectedLesson={(lesson) => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setSelectedLesson(lesson);
          }}
        />
      </ELearningContainer>
    </React.Fragment>
  );
};

LDBCourseDetailPage.Layout = LearningDashBoardMasterLayout;

export default LDBCourseDetailPage;
