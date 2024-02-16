"use client";

/* eslint-disable quotes */
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import clsx from "clsx";
import { addDays, startOfWeek, getDate, format } from "date-fns";
import { Modal, Typography } from "marathon-design-system";
import { theme } from "marathon-design-system";
import Image from "next/image";

interface Props {
  className?: string;
}

const days = ["HAI", "BA", "TƯ", "NĂM", "SÁU", "BẢY", "CN"];

export const LDBWelcome = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("h-full bg-[#F0F7FF] p-6", className)}>
      <div className="w-full max-w-[400px] mx-auto grid grid-cols-2 gap-6">
        <div>
          <p className="text-xl sm:text-2xl text-[#07385C] font-semibold">
            Hello!
          </p>
          <p className="text-md text-[#424242] mt-2 lg:mt-4">
            Bắt đầu một ngày học tập thật là bùng nổ nào!
          </p>
        </div>
        <Image
          src="/images/time-table-illustration.svg"
          alt=""
          className="w-[110px] lg:w-[134px]"
          width={134}
          height={134}
        />
      </div>
    </div>
  );
};

export const LDBCoursesTimetable = (props: Props) => {
  const { className } = props;

  const now = new Date();
  const [selectedDate, setSelectedDate] = useState(0);
  const [timetableByDay, setTimetableByDay] = useState<any>({});
  const [currentDate, setCurrentDate] = useState(0);

  const startDayOfWeek = startOfWeek(now, { weekStartsOn: 1 });
  const startDayFormatter = format(startDayOfWeek, "yyyy-MM-dd'T00:00:00Z");
  const endDayFormatter = format(
    addDays(startDayOfWeek, 6),
    "yyyy-MM-dd'T23:59:59Z"
  );
  const dateOfWeek = days.map((day, index) => ({
    day,
    date: getDate(addDays(startDayOfWeek, index)),
  }));

  return (
    <div className={className}>
      <div className="hidden md:block flex-[0_0_178px]">
        <LDBWelcome />
      </div>
      <Typography
        type={{ sm: "h-6", md: "h-5" }}
        color={theme.colors["secondary-900"]}
        as="p"
        className="pt-0 md:pt-6 text-center"
      >
        Lịch trong tuần
      </Typography>
      <div className="flex justify-center mt-6 mx-0 lg:mx-4 mb-0 ld:mb-4">
        {dateOfWeek.map((item) => (
          <div
            key={`date-item-${item.date}`}
            onClick={() => setSelectedDate(item.date)}
            className={clsx(
              "w-[40px] h-[78px] text-center rounded-full mr-[4px] last:mr-0 py-[12px] cursor-pointer",
              { "bg-[#FF8E1E]": item.date === selectedDate }
            )}
          >
            <p
              className={clsx(
                "text-[#B9B9B9] text-[10px] leading-[14px] font-medium",
                {
                  "!text-[#FF8E1E]":
                    item.date === currentDate && item.date !== selectedDate,
                },
                { "!text-[#FFF]": item.date === selectedDate }
              )}
            >
              {item.day}
            </p>

            <p
              className={clsx(
                "mt-[8px] text-[#424242] text-[14px] leading-[20px] font-semibold",
                {
                  "!text-[#FF8E1E]":
                    item.date === currentDate && item.date !== selectedDate,
                },
                { "!text-[#FFF]": item.date === selectedDate }
              )}
            >
              {item.date}
            </p>

            <div
              className={clsx(
                "rounded-[50%] bg-[#FF8E1E] w-[4px] h-[4px] mx-auto mt-[8px]",
                { "!bg-[#FFF]": item.date === selectedDate },
                { hidden: !timetableByDay[item.date]?.length }
              )}
            />
          </div>
        ))}
      </div>
      <div
        className={"mt-6 px-0 lg:px-6 overflow-y-auto  h-[312px] lg:h-[344px]"}
      >
        <Calendar />
      </div>
    </div>
  );
};

export const TimetableFloatingBtn = () => {
  const [visibleTimetable, setVisibleTimetable] = useState(false);

  return (
    <>
      <button
        className={clsx(`w-[64px] z-50
          drop-shadow-[0px_0px_15px_rgba(0,0,0,0.15)]
          fixed bottom-[96px] right-[16px] sm:bottom-[126px] sm:right-[24px]`)}
        onClick={() => setVisibleTimetable(!visibleTimetable)}
      >
        <Image
          src="/images/floating-btn-calendar.png"
          alt=""
          className="w-[64px] h-[64px]"
          width={64}
          height={64}
        />
      </button>
      <Modal
        isOpen={visibleTimetable}
        toggle={() => setVisibleTimetable(false)}
      >
        <div className="rounded-[16px] overflow-hidden bg-white p-6">
          <LDBCoursesTimetable />
        </div>
      </Modal>
    </>
  );
};
