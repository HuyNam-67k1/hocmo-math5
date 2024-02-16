"use client";

import Divider from "@/components/atoms/divider";
import { Button, Icons } from "marathon-design-system";
import ExamLayout from "@/components/templates/ExamLayout";
import StarOutlinedSvg from "@/components/icons/starOutlined.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Icon } from "@/components/Icon";
import {
  useExamQuestionFilter,
  useMyExam,
  useQuestion,
} from "@/components/organisms/API/exam/examApi";
import { useParams, useRouter } from "next/navigation";
import HeaderTestBank from "@/components/organisms/TestBank/HeaderTestBank";
import { ANSWER_TYPES, ROUTES } from "@/utils/constans";
import { times } from "lodash";
import clsx from "clsx";
import {
  getHistoryById,
  useGetHistoryById,
  useHistory,
} from "@/components/organisms/API/exam/history/examHistoryApi";

const queryClient = new QueryClient();

function QuestionList({
  exam,
  questionIndex,
}: {
  exam: any;
  questionIndex: number;
}) {
  const router = useRouter();
  const params = useParams();

  const totalQuestion = exam?.length;

  const examId = Number((params as any)?.id);

  return (
    <div className="pt-4 pb-2">
      <div className="grid gap-2 grid-cols-[repeat(8,minmax(0,1fr))] sm:grid-cols-[repeat(10,minmax(0,1fr))] md:grid-cols-[repeat(15,minmax(0,1fr))] lg:grid-cols-[repeat(25,minmax(0,1fr))]">
        {times(totalQuestion, (index: number) => {
          return (
            <div
              key={index}
              className={clsx(
                `w-full pt-[100%] text-lg rounded-md hover:font-bold text-center border border-[#f2f2f2] cursor-pointer relative hover:bg-[#eaeeea]`,
                {
                  "!border-[#222121] font-bold":
                    Number(questionIndex) === index + 1,
                }
              )}
              onClick={() => {
                router.push(
                  `${ROUTES.TEST_BANK}/dap-an/${examId}/${index + 1}`
                );
              }}
            >
              <p className="absolute inset-0 flex justify-center items-center">
                {index + 1}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ExamInfoSection({
  data,
  questionIndex,
}: {
  data: any;
  questionIndex: number;
}) {
  const router = useRouter();
  const params = useParams();
  const examId = useMemo(() => Number(params?.id), [params?.id]);

  const [showQuestionList, setShowQuestionList] = useState(true);

  const onClickShowQuestion = useCallback(() => {
    setShowQuestionList(!showQuestionList);
  }, [showQuestionList]);

  return (
    <div className="bg-white shadow-md top-[56px] mb-2 lg:top-[64px] left-0 right-0 z-[100]">
      <HeaderTestBank />
      <div className="xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem] py-5">
        <div className="md:flex  md:items-center md:justify-between">
          <div className="mb-2 md:mb-0 flex-grow-0 flex w-full">
            <div className="w-10/12 items-center">
              <p className="text-2xl font-semibold line-clamp-1">
                <span className="text-[#1f91c6] font-bold text-3xl">
                  Đề:&nbsp;
                </span>
                <span className="text-[34px]">{data?.examDTO?.title}</span>
              </p>
            </div>
            <div className="w-2/1">
              <Button
                className="!bg-[#3499b3] !text-white ml-16"
                buttonType="primary"
                buttonState="default"
                onClick={() => {
                  router.push(`${ROUTES.TEST_BANK}/dap-an/${examId}/ket-qua`);
                }}
              >
                Xem kết quả
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="hidden md:grid grid-cols-12 gap-2 col-span-8 text-xl">
            <p className="col-span-3 ">
              Môn: <span className="font-semibold">Toán Lớp 5</span>
            </p>
            <p className="col-span-3">
              Số câu hỏi:&nbsp;
              <span className="font-semibold">
                {data?.examDTO?.questions?.length}
              </span>
            </p>
            <p className="col-span-3">
              Thời gian:&nbsp;
              <span className="font-semibold">{`${(
                data?.examDTO?.duration / 60
              ).toFixed(0)} phút`}</span>
            </p>
          </div>

          <div
            className="text-[#1890FF] flex items-center justify-start md:justify-end cursor-pointer col-span-12 md:col-span-4"
            onClick={onClickShowQuestion}
          >
            <span className="mr-2 text-xl font-medium">Danh sách câu hỏi</span>
            <Icon
              type={"chevronTop"}
              svgProps={{ fill: "#1890FF" }}
              size={10}
              className={showQuestionList ? "" : "rotate-180"}
            />
          </div>
        </div>

        {showQuestionList && (
          <QuestionList
            exam={data?.examDTO?.questions}
            questionIndex={questionIndex}
          />
        )}
      </div>
    </div>
  );
}

function ExamAttemptQuestions() {
  const router = useRouter();
  const params = useParams();

  // useHistory;
  // check params is number
  const examId = useMemo(() => Number(params?.id), [params]);

  const questionIndex = useMemo(() => Number(params?.questionIndex), [params]);

  const dataResultJson = localStorage.getItem("dataResult");
  const dataResult =
    dataResultJson !== null ? JSON.parse(dataResultJson) : Object;

  const checkExamId = dataResult?.data?.examDTO?.id;
  // use data is id
  // const dataQuestion = useQuestion(1);
  const dataExamQuestionFilter = useExamQuestionFilter(
    checkExamId ? checkExamId : 1,
    questionIndex
  );

  // get data
  const question = dataExamQuestionFilter?.data?.data;

  const [answerSutdent, setAnswerSutdent] = useState([]);
  const questionList = localStorage.getItem(`question.${examId}`);

  useEffect(() => {
    if (questionList) {
      setAnswerSutdent(questionList ? JSON.parse(questionList) : []);
    }
  }, [questionList]);

  return (
    <>
      <ExamInfoSection data={dataResult?.data} questionIndex={questionIndex} />
      <div className="bg-[#fafafa]">
        <div className="xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
          <div className="py-4 grid grid-cols-12 sm:gap-4 md:gap-8">
            <div className="shadow-sm md:rounded-lg bg-white -mx-4 md:mx-0 overflow-hidden sm:col-span-12 md:col-span-7 ">
              <div className="px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center pt-5 pb-3.5">
                  <StarOutlinedSvg className="w-[30px] h-[30px]" />
                  <p className="ml-4 text-2xl font-semibold">
                    Câu:&nbsp;
                    {String(questionIndex).padStart(2, "0")}
                  </p>
                  <>
                    <p className="ml-[100px] font-semibold text-2xl justify-self-end">
                      Độ khó:&nbsp;
                    </p>
                    <span className="bg-[#E6FFF3] text-[#00A176] text-xl rounded-md px-2 py-1 ml-2">
                      Nhận biết
                    </span>
                  </>
                </div>
              </div>
              <Divider spacing={0} />
              <div className="h-auto md:h-[calc(100vh-373px)] overflow-y-auto select-none px-5 pt-10">
                <MathJaxContext>
                  <MathJax>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: question?.content || "",
                      }}
                      className="text-2xl"
                    />
                  </MathJax>
                </MathJaxContext>
              </div>
            </div>
            <div className="-mx-6 md:mx-0 shadow-sm md:rounded-lg bg-white overflow-hidden sm:col-span-12 md:col-span-5">
              <p className="p-4 font-semibold h-[60px] text-2xl mt-2s.5 ml-2 mb-2.5">
                Đáp án:&nbsp;
                <span className="text-gray-500 italic font-normal !text-lg">
                  {question?.questionType?.code === ANSWER_TYPES.SINGLE && (
                    <>(Chọn một đáp án đúng)</>
                  )}

                  {question?.questionType?.code === ANSWER_TYPES.MULTIPLE && (
                    <>(Chọn tất cả đáp án đúng)</>
                  )}
                </span>
              </p>
              <Divider spacing={0} />
              <div className="h-auto md:h-[calc(100vh-373px)] overflow-y-auto select-none mt-8">
                <div>
                  {dataResult?.data?.examDTO?.questions
                    ?.filter((item: any) => item?.id === question?.id)
                    .map((answers: any, index: number) => {
                      return (
                        <>
                          <div>
                            {answers?.questionOptions?.map(
                              (answer: any, index: number) => {
                                const checkSolution =
                                  answer.id ===
                                  answers?.questionSolutions?.solution?.[0]?.id;
                                const checkSolutionFail =
                                  answer?.checked === true;
                                return (
                                  <div key={index}>
                                    {answers?.questionType?.code ===
                                    ANSWER_TYPES.SINGLE ? (
                                      <div
                                        className={clsx(
                                          "flex items-center pt-4 gap-4 border-b-[1px] p-2 pb-4 border-[#ebebeb]",
                                          checkSolution
                                            ? "bg-[#e1fef0]"
                                            : {
                                                "bg-[#fcdede]":
                                                  checkSolutionFail,
                                              }
                                        )}
                                      >
                                        <input
                                          type="radio"
                                          name={`radio-${answer?.id}`}
                                          id={`radio-${answer?.id}`}
                                          className="ml-10"
                                          checked={answer?.checked === true}
                                        />
                                        <MathJaxContext>
                                          <MathJax>
                                            <span
                                              dangerouslySetInnerHTML={{
                                                __html: answer?.content || "",
                                              }}
                                              className="text-2xl"
                                              style={{
                                                wordBreak: "break-word",
                                              }}
                                            />
                                          </MathJax>
                                        </MathJaxContext>
                                      </div>
                                    ) : (
                                      <div
                                        className={clsx(
                                          "flex items-center pt-4 gap-4 border-b-[1px] p-2 pb-4 border-[#ebebeb]",
                                          checkSolution
                                            ? "bg-[#e1fef0]"
                                            : {
                                                "bg-[#fcdede]":
                                                  checkSolutionFail,
                                              }
                                        )}
                                      >
                                        <input
                                          type="checkbox"
                                          name={`checkbox-${answer?.id}`}
                                          id={`checkbox-${answer?.id}`}
                                          className="ml-10"
                                          checked={answer?.checked === true}
                                        />
                                        <MathJaxContext>
                                          <MathJax>
                                            <span
                                              dangerouslySetInnerHTML={{
                                                __html: answer?.content || "",
                                              }}
                                              className="text-2xl"
                                              style={{
                                                wordBreak: "break-word",
                                              }}
                                            />
                                          </MathJax>
                                        </MathJaxContext>
                                      </div>
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </div>
                          <div>
                            {answers?.questionSolutions?.explanation && (
                              <div className="p-4 mt-3">
                                <div className="p-4 w-[352px)] border border-solid	rounded-lg bg-[#FAFAFA]">
                                  <span className="text-gray-500 ont-normal mb-2 text-xl flex items-center">
                                    <Icons.IdeaFill
                                      width={34}
                                      height={34}
                                      className="m-1"
                                    />
                                    Lời giải:
                                  </span>
                                  <MathJaxContext>
                                    <MathJax>
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            answers?.questionSolutions
                                              ?.explanation,
                                        }}
                                        style={{ wordBreak: "break-word" }}
                                        className="text-xl"
                                      />
                                    </MathJax>
                                  </MathJaxContext>
                                </div>
                              </div>
                            )}
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] bg-[#f4fbfc] sticky bottom-0 left-0 right-0 py-6 ">
        <div className="flex justify-between xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
          <Button
            buttonType="link"
            onClick={() => {
              {
                Number(params?.questionIndex) <= 1
                  ? router.push(`${ROUTES.TEST_BANK}/${examId}/ket-qua`)
                  : router.push(
                      `${ROUTES.TEST_BANK}/dap-an/${examId}/${
                        questionIndex - 1
                      }`
                    );
              }
            }}
            className="flex items-center !text-xl"
          >
            <Icon type={"chevronTop"} className={"-rotate-90 mr-2"} size={15} />
            <span className="!text-xxl">Quay lại</span>
          </Button>

          {questionIndex !== dataResult?.data?.examDTO?.questions?.length ? (
            <Button
              buttonType="primary"
              onClick={() => {
                router.push(
                  `${ROUTES.TEST_BANK}/dap-an/${examId}/${questionIndex + 1}`
                );
              }}
            >
              Tiếp tục
            </Button>
          ) : (
            <>
              <Button
                className="!bg-[#3499b3] !text-white"
                buttonType="primary"
                buttonState="default"
                onClick={() => {
                  router.push(`${ROUTES.TEST_BANK}/dap-an/${examId}/ket-qua`);
                }}
              >
                Xem kết quả
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

ExamAttemptQuestion.Layout = ExamLayout;

export default function ExamAttemptQuestion() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExamAttemptQuestions />
    </QueryClientProvider>
  );
}
