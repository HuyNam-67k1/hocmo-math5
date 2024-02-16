"use client";

import Divider from "@/components/atoms/divider";
import { Button, Icons, Modal } from "marathon-design-system";
import ExamLayout from "@/components/templates/ExamLayout";
import StarOutlinedSvg from "@/components/icons/starOutlined.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { useExamAttemptStore } from "@/containers/exam/exam.store";
import { times } from "lodash";
import Image from "next/image";
import { useDoExam } from "@/components/organisms/API/exam/resultExamApi";
import clsx from "clsx";

export interface Exam {}

const queryClient = new QueryClient();

function QuestionList({
  exam,
  questionIndex,
  dataResult,
  checkStateExam,
}: {
  exam: any;
  questionIndex: number;
  dataResult: any;
  checkStateExam: any;
}) {
  const router = useRouter();

  const totalQuestion = exam?.questions?.length;

  const dataResults = dataResult?.data?.examDTO?.questions;

  return (
    <div className="pt-4 pb-2">
      <div className="grid gap-2 grid-cols-[repeat(8,minmax(0,1fr))] sm:grid-cols-[repeat(10,minmax(0,1fr))] md:grid-cols-[repeat(15,minmax(0,1fr))] lg:grid-cols-[repeat(25,minmax(0,1fr))]">
        {times(totalQuestion, (index: number) => {
          function getBg() {
            {
              // return "bg-[#e1fef0] border-[#d5d2d2]";
            }
          }
          const bg = getBg();

          return (
            <div
              key={index}
              className={clsx(
                `w-full pt-[100%] text-lg rounded-md hover:font-bold text-center border border-[#f2f2f2] ${bg} cursor-pointer relative hover:bg-[#eaeeea]`,
                {
                  "!border-[#222121] font-bold":
                    Number(questionIndex) === index + 1,
                }
              )}
              onClick={() => {
                router.push(
                  `${ROUTES.TEST_BANK}/${exam.id}/lam-bai/${index + 1}`
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
function Countdown({ data }: { data: any }) {
  const params = useParams();

  const examId = params?.id;

  const intervalRef = useRef<any>();

  const onScreenTimeRef = useRef<number>(
    Number(window.localStorage.getItem(`onscreen.${examId}`) ?? 0)
  );
  const [onScreenTime, setOnScreenTime] = useState(
    Number(window.localStorage.getItem(`onscreen.${examId}`) ?? 0)
  );

  const remainingTime = useMemo(() => {
    const timeWorkInSecond = data?.duration;

    const remain = timeWorkInSecond - onScreenTime;
    if (remain < 0) {
      return 0;
    }

    return remain;
  }, [onScreenTime, data?.duration]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newOnScreenTime = onScreenTimeRef.current + 1;
      onScreenTimeRef.current = newOnScreenTime;
      window.localStorage.setItem(
        `onscreen.${examId}`,
        String(newOnScreenTime)
      );
      setOnScreenTime(newOnScreenTime);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <p className="text-[#219b67] ml-2 font-semibold text-2xl mb-1.5">{`${String(
      Math.floor(remainingTime / 60)
    ).padStart(2, "0")}:${String(Math.round(remainingTime % 60)).padStart(
      2,
      "0"
    )}`}</p>
  );
}

function ExamInfoSection({
  data,
  questionIndex,
  dataResult,
  checkStateExam,
}: {
  data: any;
  questionIndex: number;
  dataResult: any;
  checkStateExam: any;
}) {
  const router = useRouter();

  const params = useParams();

  const examId = useMemo(() => Number(params?.id), [params]);

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
            <div className="w-9/12 items-center">
              <p className="text-2xl font-semibold line-clamp-1">
                <span className="text-[#1f91c6] font-bold text-3xl">
                  Đề:&nbsp;
                </span>
                <span className="text-[34px]">{data?.title}</span>
              </p>
            </div>
            <div className="ml-[90px]">
              {checkStateExam === "true" ? (
                <div className="w-2/1">
                  <Button
                    className="!bg-[#3499b3] !text-white ml-20"
                    buttonType="primary"
                    buttonState="default"
                    onClick={() => {
                      router.push(`${ROUTES.TEST_BANK}/${examId}/ket-qua`);
                    }}
                  >
                    Xem kết quả
                  </Button>
                </div>
              ) : (
                <div className="flex mb-5 justify-end">
                  <div className="flex items-center">
                    <Icon
                      type={"time"}
                      size={28}
                      svgProps={{ fill: "#219b67" }}
                    />
                  </div>
                  <div className="mr-2 mt-1.5 text-xl">
                    <Countdown data={data} />
                  </div>
                  <FinishExamButton examId={data?.id} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="hidden md:grid grid-cols-12 gap-2 col-span-8 text-xl">
            <p className="col-span-3 ">
              Môn: <span className="font-semibold">Toán Lớp 5</span>
            </p>
            <p className="col-span-3">
              Số câu hỏi:{" "}
              <span className="font-semibold">{data?.questions?.length}</span>
            </p>
            <p className="col-span-3">
              Thời gian:&nbsp;
              <span className="font-semibold">{`${(data?.duration / 60).toFixed(
                0
              )} phút`}</span>
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
            exam={data}
            questionIndex={questionIndex}
            dataResult={dataResult}
            checkStateExam={checkStateExam}
          />
        )}
      </div>
    </div>
  );
}

function ExamAttemptQuestions() {
  const router = useRouter();

  const params = useParams();

  // check params is number
  const examId = useMemo(() => Number(params?.id), [params]);
  const questionIndex = useMemo(() => Number(params?.questionIndex), [params]);

  // use data is id
  const dataExam = useMyExam(examId);
  // const dataQuestion = useQuestion(questionIndex);

  // useExamQuestionFilter is id

  const dataExamQuestionFilter = useExamQuestionFilter(examId, questionIndex);

  // get data
  const exam = dataExam?.data?.data;
  const question = dataExamQuestionFilter?.data?.data;

  const [optionId, setOptionId] = useState(0);

  const [answerSutdent, setAnswerSutdent] = useState([]);
  const questionList = localStorage.getItem(`question.${examId}`);

  useEffect(() => {
    if (questionList) {
      setAnswerSutdent(questionList ? JSON.parse(questionList) : []);
    }
  }, [questionList]);

  const handleNextQuestion = () => {
    if (Number(questionIndex) === exam.length) {
      router.push(`${ROUTES.TEST_BANK}/${examId}/ket-qua`);
      return;
    }

    const questions = {
      valueText: `${optionId === 0 ? "" : optionId}`,
      questionId: question?.id,
      examId: exam?.id,
    };
    const questionList = localStorage.getItem(`question.${examId}`);

    if (questionList) {
      const list = JSON.parse(questionList);
      list.push(questions);
      localStorage.setItem(`question.${examId}`, JSON.stringify(list));
    } else {
      localStorage.setItem(`question.${examId}`, JSON.stringify([questions]));
    }
  };

  const checkStateExam = window.localStorage.getItem(`stateExam.${examId}`);
  const dataDoExam = window.localStorage.getItem(`doExam.${examId}`);
  const dataResult = JSON.parse(dataDoExam || "[]");

  return (
    <>
      <ExamInfoSection
        data={exam}
        questionIndex={questionIndex}
        dataResult={dataResult}
        checkStateExam={checkStateExam}
      />
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
                {checkStateExam === "true" ? (
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
                                    answers?.questionSolutions?.solution?.[0]
                                      ?.id;
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
                ) : (
                  <div>
                    {question?.questionOptions?.map(
                      (answer: any, index: number) => {
                        return (
                          <>
                            {question?.questionType?.code ===
                            ANSWER_TYPES.SINGLE ? (
                              <div
                                className="flex items-center pt-4 gap-4 border-b-[1px] p-2 pb-4 border-[#faf5f5] cursor-pointer hover:bg-[#f1f1f1]"
                                onClick={() => setOptionId(answer?.id)}
                              >
                                <input
                                  type="radio"
                                  name={`radio-${answer?.id}`}
                                  id={`radio-${answer?.id}`}
                                  className="ml-10"
                                  checked={optionId === answer?.id}
                                  onChange={() => setOptionId(answer?.id)}
                                />
                                <MathJaxContext>
                                  <MathJax>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: answer?.content || "",
                                      }}
                                      className="text-2xl"
                                      style={{ wordBreak: "break-word" }}
                                    />
                                  </MathJax>
                                </MathJaxContext>
                              </div>
                            ) : (
                              <div
                                className="flex items-center pt-4 gap-4 border-b-[1px] p-2 pb-4 border-[#faf5f5] cursor-pointer hover:bg-[#f1f1f1]"
                                onClick={() => setOptionId(answer?.id)}
                              >
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  id="checkbox"
                                  className="ml-10"
                                  // checked={optionId === answer?.id}
                                  onChange={() => setOptionId(answer?.id)}
                                />
                                <MathJaxContext>
                                  <MathJax>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: answer?.content || "",
                                      }}
                                      className="text-2xl"
                                      style={{ wordBreak: "break-word" }}
                                    />
                                  </MathJax>
                                </MathJaxContext>
                              </div>
                            )}
                          </>
                        );
                      }
                    )}
                  </div>
                )}
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
                  ? router.push(`${ROUTES.TEST_BANK}/1`)
                  : router.push(
                      `${ROUTES.TEST_BANK}/${examId}/lam-bai/${
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

          {questionIndex !== exam?.questions?.length ? (
            <Button
              buttonType="primary"
              onClick={() => {
                {
                  checkStateExam === "true" ? "" : handleNextQuestion();
                }
                router.push(
                  `${ROUTES.TEST_BANK}/${examId}/lam-bai/${questionIndex + 1}`
                );
              }}
            >
              Tiếp tục
            </Button>
          ) : (
            <>
              {checkStateExam === "true" ? (
                <Button
                  className="!bg-[#3499b3] !text-white"
                  buttonType="primary"
                  buttonState="default"
                  onClick={() => {
                    router.push(`${ROUTES.TEST_BANK}/${examId}/ket-qua`);
                  }}
                >
                  Xem kết quả
                </Button>
              ) : (
                <FinishExamButton examId={examId} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

interface FinishExamButtonProps {
  examId: number;
}
function FinishExamButton({ examId }: FinishExamButtonProps) {
  const [openModal, setOpenModal] = useState(false);
  const answers = useExamAttemptStore((state) => state.answers);

  const unAnswersQuestion = useMemo(() => {
    return answers.filter((value) => {});
  }, [answers]);

  const onClickFinish = useCallback(async () => {
    setOpenModal(true);
  }, []);

  return (
    <>
      <Button buttonType="primary" buttonState="focus" onClick={onClickFinish}>
        Nộp bài
      </Button>
      {openModal && (
        <ConfirmSubmitModal
          onClose={() => setOpenModal(false)}
          unAnswersQuestion={unAnswersQuestion.length}
          onSubmit={() => {}}
        />
      )}
    </>
  );
}

function ConfirmSubmitModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  unAnswersQuestion: number;
  onSubmit: () => void;
}) {
  const router = useRouter();

  const params = useParams();

  const examId = params?.id;

  const onscreen = localStorage.getItem(`onscreen.${examId}`);

  const { mutateAsync: doExam } = useDoExam(Number(examId), Number(onscreen));

  const answerStudentList = localStorage.getItem(`question.${examId}`);

  const listAnswer = JSON.parse(answerStudentList || "[]");

  const checkDuplicates = listAnswer
    .reverse()
    .filter((obj: any, index: any) => {
      return (
        index ===
        listAnswer.findIndex((o: any) => obj.questionId === o.questionId)
      );
    });

  const hanleClickFinish = useCallback(async () => {
    const data = await doExam(checkDuplicates);

    localStorage.setItem(`doExam.${examId}`, JSON.stringify(data));

    router.push(`${ROUTES.TEST_BANK}/${examId}/ket-qua`);
  }, [checkDuplicates, doExam, examId, router]);

  return (
    <Modal isOpen={true} toggle={() => onClose()}>
      <div className="bg-[#FFF] w-[302px] h-[360px] items-center text-center rounded-2xl pt-[40px] relative">
        <button
          onClick={() => onClose()}
          className="absolute right-[16px] top-[16px]"
        >
          <Icon type="close" svgProps={{ stroke: "#B9B9B9" }} />
        </button>
        <Image
          src="/images/warning.png"
          className="mx-auto"
          alt=""
          width={150}
          height={110}
        />
        <p className="text-xl font-bold text-[#242424] mt-[40px]">Lưu ý !</p>

        <p className="text-md mt-[8px]">Bạn có chắc chắn muốn nộp bài</p>
        <div className="flex mt-9 justify-center gap-6">
          <button
            className="border border-[#219B67] text-lg font-semibold text-[#219B67] rounded-lg px-8 py-1.5 hover:bg-[#edfef9]"
            onClick={() => onClose()}
          >
            Huỷ
          </button>
          <button
            className="border bg-[#219B67] text-lg font-semibold text-[#fff] rounded-lg px-5 hover:bg-[#2f6950]"
            onClick={() => hanleClickFinish()}
          >
            Nộp bài
          </button>
        </div>
      </div>
    </Modal>
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
