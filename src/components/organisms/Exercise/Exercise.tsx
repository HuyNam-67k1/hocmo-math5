"use client";

import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { LessonContentProps } from "../LDBCoursesDetail/LDBCourseDetailLessonContent";
import { QueryClient, QueryClientProvider } from "react-query";
import { FindNotFound } from "@/components/atoms/FindNotFound";
import clsx from "clsx";
import Accordion from "@/components/molecules/Accordion/Accordion";
import { Arrow } from "@/components/atoms/Arrow";
import { Icons, Tooltip } from "marathon-design-system";
import CurvedLine from "@/components/atoms/curved-line";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import styled from "styled-components";
import { useDoExcercise, useExcercise } from "../API/exercise/exerciseApi";
import { ANSWER_TYPES } from "@/utils/constans";
import { isEmpty } from "lodash";

const StyleQuestion = styled.span`
  p {
    display: flex;
    align-items: center;
  }
  img {
    padding: 12px;
  }
`;

const queryClient = new QueryClient();

function ExerciseQuestions({
  selectedLesson,
}: {
  selectedLesson: LessonContentProps;
}) {
  const [activeList, setActiveList] = useState<number[]>([-1]);
  const [activeListVisited, setActiveListVisted] = useState<number[]>([-1]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: number;
  }>({});
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const checkSelectedLesson = useMemo(() => {
    return selectedLesson?.id;
  }, [selectedLesson]);

  const { data: data } = useExcercise(checkSelectedLesson);

  const handleOptionChange = (questionId: any, optionId: any) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: optionId,
    }));
    setSelectedOption(optionId);
    setSelectedQuestion(questionId);
  };

  useDoExcercise(selectedOption, selectedQuestion, checkSelectedLesson);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {}, [checkSelectedLesson]);

  if (data?.httpCode === 404 || data?.httpCode === 500) {
    return (
      <FindNotFound
        title={"Bài luyện tập đang được cập nhật!!"}
        className="pb-20 pt-20"
      />
    );
  }

  const title = (
    <span>
      Bài:&nbsp;
      <span
        dangerouslySetInnerHTML={{
          __html: data?.data?.title || "",
        }}
        className="text-[#424242] font-semibold"
      />
      &nbsp;đang được cập nhật!!
    </span>
  );

  return (
    <div className="px-[70px] lg:overflow-y-auto h-full lg:pt-7 lg:max-h-[calc(100vh)]">
      <>
        {isEmpty(data?.data?.questions) ? (
          <FindNotFound title={title} className="pb-20 pt-20" />
        ) : (
          <div>
            <div className="justify-center flex">
              <CurvedLine
                size="md"
                color="#28A06D"
                className="mt-4 lg:mt-4 px-4 lg:px-0 flex !justify-center mb-10 font-semibold text-xl lg:text-3xl text-center"
              >
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.title || "",
                    }}
                    className="text-[#424242]"
                  />
                </span>
              </CurvedLine>
            </div>
            <div className="text-end mt-3 text-2xl text-[#2b627e] font-semibold">
              Tổng số câu đã làm:&nbsp;
              <span className="font-bold text-[#2e6f8f]">
                {data?.data?.questionPracticed}
              </span>
              /20
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {data?.data?.questions?.map((question: any, index: number) => {
            const checked = () => {
              if (isEmpty(question?.questionResponseUser)) {
                return false;
              }
              return true;
            };

            const check = checked();

            return (
              <>
                <div key={index} className="my-5 py-4 text-[22px] pl-10">
                  <div className="flex">
                    <span className="text-[#2b627e] font-semibold mr-2">
                      Câu {question?.code}:&nbsp;
                    </span>
                    <span className="text-[#4e4c4c] font-semibold">
                      <MathJaxContext>
                        <MathJax>
                          <StyleQuestion
                            dangerouslySetInnerHTML={{
                              __html: question?.content || "",
                            }}
                            className=""
                          />
                        </MathJax>
                      </MathJaxContext>
                    </span>
                  </div>
                  <div className="text-lg mt-1 text-[#9da09e] italic">
                    {question?.questionType?.code === "MC" ? (
                      <p>
                        <span className="text-[#d24e4e]">*&nbsp;</span>Chọn tất
                        cả đáp án đúng
                      </p>
                    ) : (
                      <p>
                        <span className="text-[#d24e4e]">*&nbsp;</span>Chọn một
                        đáp án đúng
                      </p>
                    )}
                  </div>
                  <div className="mt-5 ml-5 items-center">
                    {question?.questionOptions?.map(
                      (option: any, indexs: number) => {
                        return (
                          <>
                            <label
                              key={indexs}
                              className="flex gap-2 text-[#4e4c4c] mb-6 ml-5 item"
                            >
                              {question?.questionType?.code !==
                              ANSWER_TYPES.SINGLE ? (
                                <input
                                  type="checkbox"
                                  className="flex items-center mt-2 mr-1"
                                  style={{ height: "16px", width: "16px" }}
                                  value={option.id}
                                  name={option?.content}
                                  disabled={
                                    activeListVisited.indexOf(index) !== -1 ||
                                    option?.checked
                                  }
                                  checked={option?.checked}
                                  onChange={() =>
                                    handleOptionChange(question.id, option.id)
                                  }
                                />
                              ) : (
                                <input
                                  type="radio"
                                  className="flex items-center mt-2 mr-1"
                                  style={{ height: "16px", width: "16px" }}
                                  value={option.id}
                                  name={option?.content}
                                  checked={
                                    selectedAnswers[question.id] ===
                                      option.id || option?.checked
                                  }
                                  disabled={
                                    activeListVisited.indexOf(index) !== -1 ||
                                    option?.checked
                                  }
                                  onChange={() =>
                                    handleOptionChange(question.id, option.id)
                                  }
                                />
                              )}
                              <MathJaxContext>
                                <MathJax>
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: option?.content || "",
                                    }}
                                    className="text-2xl"
                                  />
                                </MathJax>
                              </MathJaxContext>
                            </label>
                          </>
                        );
                      }
                    )}
                  </div>
                  {!selectedAnswers.hasOwnProperty(question.id) && !check ? (
                    <div className="w-4/12">
                      <Tooltip
                        trigger={["click", "hover"]}
                        title={"Vui lòng chọn câu trả lời!"}
                        className={"w-full md:w-[180px]"}
                      >
                        <div className="flex w-[200px] items-center h-[45px] border border-[#eeeeee] px-2 bg-[#ecf6fd] rounded-xl	my-2 mt-6 text-[#95adba] font-semibold">
                          <Icons.DownArrow
                            width={15}
                            height={15}
                            className="m-3 font-semibold"
                          />
                          Kiểm tra
                        </div>
                      </Tooltip>
                    </div>
                  ) : (
                    <Accordion
                      key={index}
                      // initActive
                      onToggle={(isActive) => {
                        if (isActive && activeList.indexOf(index) === -1) {
                          setActiveList([...activeList, index]);
                          setActiveListVisted(
                            Array.from(new Set([...activeListVisited, index]))
                          );
                        } else if (activeList.indexOf(index) > -1) {
                          const newList = [...activeList];
                          newList.splice(newList.indexOf(index), 1);
                          setActiveList(newList);
                        }
                      }}
                      header={
                        <SectionHeader
                          isActive={activeList.includes(index)}
                          isIcon={true}
                          extraText={"Kiểm tra"}
                          titleClassName="flex px-6 bg-[#ECF6FD] rounded-xl	my-2 mt-6"
                        />
                      }
                      body={
                        <div className="bg-[#fafafa] min-h-[50px] rounded-xl	p-6 mb-10 border border-[#dad7d7]">
                          <div className="flex mb-4">
                            <Icons.Degree
                              width={25}
                              height={25}
                              className="m-1"
                            />
                            <span className="font-semibold text-xl text-[#616563]  w-[14%]">
                              Đáp án:
                            </span>
                            &nbsp;
                            <div className="leading-8 w-[86%]">
                              {question?.questionSolutions?.solution?.map(
                                (itemSolution: any, indexSolution: number) => (
                                  <div
                                    key={indexSolution}
                                    className="flex items-center min-h-[70px]"
                                  >
                                    <MathJaxContext>
                                      <MathJax>
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: itemSolution?.content || "",
                                          }}
                                          className="text-3xl"
                                        />
                                      </MathJax>
                                    </MathJaxContext>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                          {question?.questionSolutions?.explanation && (
                            <div className="flex">
                              <Icons.IdeaFill
                                width={24}
                                height={24}
                                className="m-1"
                              />
                              <span className="font-semibold text-xl text-[#616563] w-[14%]">
                                Hướng dẫn:
                              </span>
                              <div className="bg-[#ffffff] min-h-[60px] mt-1 mr-2 rounded-md border border-[#e3e2e2] p-5 w-[86%]">
                                <MathJaxContext>
                                  <MathJax>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          question?.questionSolutions
                                            ?.explanation || "",
                                      }}
                                      className="text-2xl text-[#6b6868]"
                                    />
                                  </MathJax>
                                </MathJaxContext>
                              </div>
                            </div>
                          )}
                        </div>
                      }
                    />
                  )}
                </div>
              </>
            );
          })}
        </form>
      </>
    </div>
  );
}

const SectionHeader = (
  props: PropsWithChildren<{
    isActive?: boolean;
    extraText?: string;
    isIcon?: boolean;
    titleClassName?: string;
  }>
) => {
  const { isActive, children, extraText = "", titleClassName } = props;
  const textColor = isActive ? "#219B67" : "#424242";

  return (
    <div
      className={clsx(
        "flex w-[200px] items-center text-[#424242] h-[45px] border border-[#eeeeee]",
        titleClassName,
        {
          "bg-[#F1FFF9] font-normal !text-[#219B67] border border-[#eaeaea]":
            isActive,
        }
      )}
    >
      <div
        className={`flex items-center text-[${textColor}] lg:text-base text-sm`}
      >
        <Arrow
          type={`${isActive ? "up" : "down"}`}
          borderWidth="2px"
          color={`${isActive ? "#219B67" : "#424242"}`}
          width="4px"
          className={clsx({ "mt-[-4px]": !isActive }, { "mt-[4px]": isActive })}
        />
        {children}
      </div>
      <div
        className={clsx(
          "text-[#1f91c6] lg:text-[22px] text-lg whitespace-nowrap ml-4 font-medium",
          { "!text-[#22563d]": isActive }
        )}
      >
        <span className="text-[#1b5139]">{extraText}</span>
      </div>
    </div>
  );
};

export default function Exercise({
  selectedLesson,
}: {
  selectedLesson: LessonContentProps;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ExerciseQuestions
        selectedLesson={selectedLesson as LessonContentProps}
      />
    </QueryClientProvider>
  );
}
