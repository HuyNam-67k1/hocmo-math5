"use client";

import clsx from "clsx";
import { Collapsible } from "@/components/atoms/Collapsible";
import { LessonCard } from "@/components/molecules/Card/LessonCard";
import { LessonContentProps } from "./LDBCourseDetailLessonContent";
import data from "../../../../db-lesson.json";
import { isEmpty } from "lodash";
import { ROUTES } from "@/utils/constans";
import { Icons } from "marathon-design-system";

function transformClasses(classes: any[]) {
  return classes.reduce((result, item) => {
    const keyName = (function () {
      if (!result[item?.chapter?.id]) {
        return (result[item?.chapter?.id] = [item]);
      } else {
        return result[item?.chapter?.id].push(item);
      }
    })();
    return result;
  }, {});
}

function mapLessonsWithName(classes: any[]) {
  return classes.reduce((result, item) => {
    if (!result[item?.chapter?.id]) {
      result[item?.chapter?.id] = item.chapter;
    }
    return result;
  }, {});
}

interface Props {
  className?: string;
  selectedLesson?: LessonContentProps;
  setSelectedLesson: (lessonContent?: LessonContentProps) => void;
}
export const LDBCourseDetailLessonList = (props: Props) => {
  const { setSelectedLesson } = props;
  const mapLessons = mapLessonsWithName(data?.data?.contents);
  const datas = transformClasses(data?.data?.contents);
  const checkStateExam = window.localStorage.getItem(
    `stateExam.${1 || 2 || 3 || 4}`
  );

  return (
    <div>
      <div>
        {isEmpty(checkStateExam) ? (
          <>
            <div className="mb-3 text-[#07375C] font-semibold text-lg flex items-center gap-1">
              <Icons.Experience width={30} height={30} />

              <div>
                <span className="text-lg">
                  Hãy làm đề thi để ôn tập kiến thức nhé!&nbsp;
                </span>
                <a
                  className="text-[#34aa77] cursor-pointer fon-bold underline"
                  href={ROUTES.TEST_BANK}
                  target="_blank"
                >
                  Bắt đầu
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-3 text-[#07375C] font-semibold text-lg flex items-center gap-1">
              <div className="">
                <Icons.Experience width={35} height={35} />
              </div>
              <div>
                <span className="">Bạn đã hoàn thành các đề thi</span>
                <div>
                  Quay lại để ôn tập thêm nhé!&nbsp;{" "}
                  <a
                    className="text-[#34aa77] cursor-pointer fon-bold underline"
                    href={ROUTES.TEST_BANK}
                    target="_blank"
                  >
                    Bắt đầu
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="bg-[#FFFFFF] rounded-lg w-full">
        <div className="h-[50px] border-b border-[#EEEEEE] px-5 bg-[#219b67] rounded-t-lg">
          <p className="text-[#ffffff] text-xl lg:text-2xl font-semibold p-2">
            Danh Sách Bài Học
          </p>
        </div>
        <div className="lg:overflow-y-auto h-full lg:max-h-[calc(100vh-214px)]">
          <div className="mt-[8px] first:mt-0">
            {Object.keys(datas).map((key: any, index: number) => (
              <div key={index}>
                <Collapsible
                  openByDefault
                  titleClassName="flex-row-reverse px-[24px] bg-[#ECF6FD] mb-[1px] min-h-[80px] mb-[6px] mt-[6px]"
                  title={
                    <>
                      <button
                        className={`flex justify-between items-center text-sm w-full min-h-[60px] ml-[16px] p-2 font-mediumhover:text-[#219B67] hover:text-[#388d68]`}
                      >
                        <div>
                          <p className="text-[20px] leading-8 !text-left text-[#1b5139] !font-bold">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: mapLessons[key]?.name || "",
                              }}
                              className="text-2xl"
                            />
                          </p>
                          <p className="text-[16px] text-[#9B9B9B] !font-normal text-left pt-2">
                            ( {datas[key].length} bài )
                          </p>
                        </div>
                      </button>
                    </>
                  }
                  content={datas[key].map((classItem: any, i: number) => (
                    <button
                      className={clsx(
                        "hover:bg-[#eeeded] w-full min-h-[50px]",
                        {
                          "bg-[#eeeded]":
                            classItem.id === props.selectedLesson?.id,
                        }
                      )}
                      key={index}
                      onClick={() => {
                        setSelectedLesson(classItem);
                      }}
                    >
                      <LessonCard
                        icon={"lessonPlay"}
                        title={
                          <p className="font-medium text-[20px] text-[#434242] leading-7 py-2">
                            {classItem.title}
                          </p>
                        }
                        className="py-[12px]"
                      />
                    </button>
                  ))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
