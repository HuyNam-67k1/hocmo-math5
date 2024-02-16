"use client";

import ReactPlayer from "react-player";
import { Icons, Typography } from "marathon-design-system";
import { styled, theme } from "marathon-design-system";
import { LDBCourseDetailLessonList } from "./LDBCourseDetailLessonList";
import { FindNotFound } from "@/components/atoms/FindNotFound";
import { HTMLAttributes, useEffect } from "react";
import Image from "next/image";
import Exercise from "../Exercise/Exercise";
import Discussion from "../Discussion/Discussion";
import CurvedLine from "@/components/atoms/curved-line";
import { isEmpty } from "lodash";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const StyleContent = styled.div`
  p {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
  }
`;

export interface LessonContentProps {
  id: number;
  title: string;
  content: string;
  description?: string;
  courseCode?: string;
  lessonSourceMediaLinkVideo?: string;
  lessonSourceMediaLinkImage: string;
  classId?: string;
  lessonId?: number;
  skuType?: string;
  type?: number;
  chapter: any;
}
interface Props {
  selectedLesson?: LessonContentProps;
  setSelectedLesson: (selectedLesson?: LessonContentProps) => void;
}

function NotIncludeFinishedScreen() {
  return (
    <>
      <Image
        src="/images/class-starting.png"
        className="w-full lg:rounded-2"
        alt="ldb-comming-soon"
        layout="fill"
        objectFit="contain"
      />
      <div className="absolute top-[50%] translate-y-[-230%] lg:left-[70px] left-[32px] text-[#424242]">
        <p className="lg:text-3xl text-xl font-semibold">
          Chào mừng bạn đến với
        </p>
        <p className="mt-[4px] lg:text-[40px] lg:leading-[56px] text-xl font-bold">
          những bài học chất lượng của&nbsp;
          <span className="text-[#38a274] font-bold">Học Mở</span>
        </p>
      </div>
    </>
  );
}

function ClassScreen({ link }: { link: string }) {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: `calc(${(210 / 377) * 100}%)`,
        position: "relative",
        display: "block",
      }}
    >
      {link ? (
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <ReactPlayer
            url={link}
            height="100%"
            width="100%"
            style={{ borderRadius: "20px" }}
            controls
          />
        </div>
      ) : (
        <NotIncludeFinishedScreen />
      )}
    </div>
  );
}

export const LDBCourseDetailLessonContent = ({
  selectedLesson,
  setSelectedLesson,
}: Props & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div>
      <div className="flex space-x-0 lg:space-x-6 mt-0 lg:mt-2 flex-col lg:flex-row relative">
        <div className="flex-1">
          <div className="sticky lg:static top-[56px] lg:rounded-md overflow-hidden z-[99]">
            {
              <ClassScreen
                link={selectedLesson?.lessonSourceMediaLinkVideo || ""}
              />
            }
            <Typography
              type={{ sm: "h-6", md: "h-3" }}
              color={theme.colors["secondary-900"]}
              weight="semibold"
              className={"mt-4 lg:mt-4 px-4 lg:px-0 flex"}
              as="p"
            >
              {selectedLesson?.title}
            </Typography>
            <div className="px-4 lg:px-0 lg:mt-6">
              <Tabs>
                <Tabs>
                  <TabList>
                    <Tab>
                      <span className="text-[24px] flex mr-5">
                        <Icons.BookNoBgSvg
                          width={24}
                          height={24}
                          className="mt-1.5"
                        />
                        &nbsp;Nội dung bài học
                      </span>
                    </Tab>
                    <Tab>
                      <span className="text-[24px] flex mr-5">
                        <Icons.BooksFill
                          width={24}
                          height={24}
                          className="mt-1.5"
                        />
                        &nbsp;Bài luyện tập
                      </span>
                    </Tab>
                    <Tab>
                      <span className="text-[24px] flex">
                        <Icons.Launch
                          width={24}
                          height={24}
                          className="mt-1.5"
                        />
                        &nbsp;Bình luận
                      </span>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <LessonIntroduce
                      selectedLesson={selectedLesson as LessonContentProps}
                    />
                  </TabPanel>
                  <TabPanel>
                    <div className="px-4 lg:px-0 bg-white">
                      <Exercise
                        selectedLesson={selectedLesson as LessonContentProps}
                      />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="px-4 lg:px-0">
                      <Discussion
                        selectedLesson={selectedLesson as LessonContentProps}
                      />
                    </div>
                  </TabPanel>
                </Tabs>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:flex-[0_0_450px] relative">
          <div className="static lg:sticky top-[58px]">
            <LDBCourseDetailLessonList
              selectedLesson={selectedLesson}
              setSelectedLesson={setSelectedLesson}
              className="static lg:sticky top-[58px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function LessonIntroduce({
  selectedLesson,
}: {
  selectedLesson: LessonContentProps;
}) {
  return (
    <div className="px-5 lg:py-6 w-full lg:text-lg text-[#424242] lg:px-16 lg:overflow-y-auto h-full lg:max-h-[calc(100vh)] bg-white">
      {!isEmpty(selectedLesson?.content) ? (
        <>
          <div className="justify-center flex">
            <CurvedLine
              size="md"
              color="#28A06D"
              className="mt-4 lg:mt-4 px-4 lg:px-0 flex !justify-center mb-10 font-semibold text-xl lg:text-3xl text-center"
            >
              <span>
                {selectedLesson?.title}
                <span className=""></span>
              </span>
            </CurvedLine>
          </div>
          <StyleContent
            dangerouslySetInnerHTML={{
              __html: selectedLesson?.content || "",
            }}
            className=""
          />
        </>
      ) : (
        <FindNotFound
          className={"mx-auto lg:mt-14 mt-4 pb-20"}
          title="Nội dung bài học đang được cập nhật !!"
        />
      )}
    </div>
  );
}

export default LDBCourseDetailLessonContent;
