import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

interface Answer {
  valueText: string;
  questionId: number;
  examId: number;
}

interface AnswerDo {
  duration: number;
  questionResponseUserDoExamDTOs: [
    {
      valueText: string;
      questionId: number;
      examId: number;
    }
  ];
}

export const useDoExam = (examId: number, duration: number) => {
  return useMutation((doExam: any) => getDoExam(examId, doExam, duration));
};
export const useGetResult = (examId: number) => {
  return useMutation(() => getResult(examId));
};
export const useGetStatistics = () => {
  return useQuery("getStatistics", getStatistics);
};

const getDoExam = async (examId: number, doExam: any, duration: number) => {
  const body = {
    duration,
    questionResponseUserDoExamDTOs: doExam,
  };
  const res = await fetch(`${DOMAIN_API}/api/exam/doExam/${examId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

const getResult = async (examId: number) => {
  const res = await fetch(`${DOMAIN_API}/api/exam/result/${examId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  return res.json();
};

const getStatistics = async () => {
  const res = await fetch(`${DOMAIN_API}/api/exam/statistics`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  return res.json();
};
