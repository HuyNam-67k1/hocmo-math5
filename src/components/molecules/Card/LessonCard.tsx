"use client";

import { ReactNode } from "react";
import clsx from "clsx";
// import { Icon } from "@/components/Icon";
import { Icons } from "marathon-design-system";
import { Icon } from "@/components/Icon";

interface Props {
  className?: string;
  icon?: Icon;
  title?: any;
  subTitle?: ReactNode;
}
export const LessonCard = (props: Props) => {
  const { className, icon, title, subTitle } = props;

  return (
    <div className={clsx("p-4 flex items-center border-b-[1px]", className)}>
      <Icon type="lessonPlay" size="small" />
      {/* <Icons.Play width={70} height={70} /> */}

      <div className="ml-4 text-left">
        <div className="lg:text-base text-sm text-[#242424]">{title}</div>
        <div className="lg:text-sm text-xs text-[#9B9B9B]">{subTitle}</div>
      </div>
    </div>
  );
};
