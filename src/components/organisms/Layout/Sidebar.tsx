"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { LDBCoursesGoToWebEcom } from "@/components/organisms/LDBCourses/LDBCoursesGoToWebEcom";
import { Icon } from "@/components/Icon";

export interface MenuType {
  title?: string;
  children: Array<{
    icon: Icon;
    activeIcon: Icon;
    label: string;
    disabled?: boolean;
    code: string;
    badge?: boolean;
  }>;
}

interface Props {
  goBack?: {
    label: string;
    link: string;
  };
  active?: string;
  menus?: MenuType[];
}

export const Sidebar = (props: Props) => {
  const { goBack, menus, active } = props;
  const [over, setOver] = useState(false);

  return (
    <div
      className={`
      fixed 
      hidden lg:flex lg:flex-col lg:justify-between
      h-[calc(100vh-56px)] lg:h-[calc(100vh-64px)] w-[250px] 
      overflow-y-auto overflow-x-hidden
      text-sm text-[#0d070b] font-medium 
      p-6
    `}
    >
      <div>
        {goBack && (
          <Link passHref href={goBack.link} legacyBehavior>
            <a
              className={clsx("flex h-[44px] items-center mb-[24px]", {
                "text-[#1F91C6]": over,
              })}
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
            >
              <Icon type={over ? "backFill" : "back"} />
              <span className=" ml-[10px]">{goBack.label}</span>
            </a>
          </Link>
        )}
        {menus?.map((menu, index) => (
          <div key={`sidebar-menu-${index}`} className="w-[202px]">
            <div
              className={clsx({
                hidden: !menu.title,
              })}
            >
              <p className="font-semibold text-[#07385C] text-xl">
                {menu.title}
              </p>
              <div className="h-[1px] bg-[#8fd2ec] mt-[16px]" />
            </div>
            {menu.children?.map((menuItem, i) => (
              <button
                key={`sidebar-item-${i}`}
                className={clsx(
                  "flex w-full lg:mt-[16px] p-[10px] rounded-lg text-[#242424]",
                  { "opacity-30": menuItem.disabled },
                  { "bg-[#F0F7FF]": active === menuItem.code },
                  { "hover:bg-[#F0F7FF]": !menuItem.disabled }
                )}
                disabled={menuItem.disabled}
              >
                <Icon
                  type={
                    active === menuItem.code
                      ? menuItem.activeIcon
                      : `${menuItem.icon}`
                  }
                  size="medium"
                />
                <p className="ml-[10px]">{menuItem.label}</p>
                {menuItem.badge && (
                  <div className="w-[8px] h-[8px] bg-[#219B67] ml-[8px] rounded-[50%]" />
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-[#ECECEC] w-[202px] mt-[16px] pt-[16px]">
        <LDBCoursesGoToWebEcom className="mt-[52px]" />
      </div>
    </div>
  );
};
