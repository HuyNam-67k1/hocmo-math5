"use client";

import React from "react";
import clsx from "clsx";
import NewSvg from "../../icons/new.svg";
import { ROUTES } from "../../../utils/constans";

interface Props {
  className?: string;
  onClose?: () => void;
  user?: boolean;
}

const LDBCoursesGoToLDB = (props: Props) => {
  const { className, user } = props;

  return (
    <a
      href={user ? ROUTES.LDB : ROUTES.AUTHEN}
      target="_blank"
      rel="noreferrer"
    >
      <button
        className={clsx(
          `
          h-10 hover:bg-[#e6f9f2] text-sm text-[#219B67] font-semibold relative 
          border border-[#219B67] rounded-lg overflow-hidden`,
          className
        )}
      >
        <span className="px-5 text-lg font-bold">Mở ra học</span>
        <NewSvg width={24} height={24} className="absolute top-0 right-0" />
      </button>
    </a>
  );
};

export default LDBCoursesGoToLDB;
