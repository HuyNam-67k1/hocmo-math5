"use client";

import React, { PropsWithChildren } from "react";
import { Header } from "marathon-design-system";
import { ROUTES } from "@/utils/constans";

const menu = [
  {
    link: ROUTES.LEARNING_DASHBOARD,
    name: "",
    noNewTab: true,
    key: "/index",
  },
];

function LearningDashboardHeader() {
  return (
    <Header
      logo={{
        link: ROUTES.HOME,
        image: "/images/logo-hoc-mo-1.png",
      }}
      menu={menu}
      menuClassname="lg:ml-[60px]"
      currentUrl={`https://iuh.edu.vn/`}
    />
  );
}

interface LearningDashBoardMasterLayoutProps {
  className?: string;
}

export const LearningDashBoardMasterLayout = ({
  children,
}: PropsWithChildren<LearningDashBoardMasterLayoutProps>) => {
  return (
    <div className="">
      <LearningDashboardHeader />

      <main>{children}</main>
    </div>
  );
};

export default LearningDashboardHeader;
