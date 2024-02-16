"use client";

import { useMemo } from "react";
import { BreadCrumbs } from "@/components/atoms/BreadCrumbs";
import { ROUTES } from "@/utils/constans";

interface Props {
  crumbs?: {
    name: string;
    url: string;
  }[];
  setActive: () => void;
}

export const LDBCourseDetailBreadcrumb = (props: Props) => {
  const { crumbs, setActive } = props;
  const breadCrumbs = useMemo(() => {
    return [
      {
        name: "Trang chủ",
        url: `${ROUTES.HOME}`,
      },
      {
        name: "Các khoá học",
        url: `${ROUTES.LEARNING_DASHBOARD}`,
      },

      ...(crumbs || []),
    ];
  }, [crumbs]);

  return (
    <BreadCrumbs
      crumbs={breadCrumbs}
      crumItemClassName="font-medium !text-lg md:text-md max-w-[250px]"
      className="!text-lg md:text-base px-[16px] lg:px-0"
    />
  );
};
