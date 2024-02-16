import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useQuery } from "react-query";

export const useListExam = () => {
  return useQuery("getListExam", getListExam);
};

export const useMyExam = (examId: number) => {
  return useQuery("getExam", () => getMyExam(examId));
};
export const useQuestion = (questionId: number) => {
  return useQuery("getQuestion", () => getQuestion(questionId));
};

export const useExamQuestionFilter = (examId: number, order: number) => {
  return useQuery("getExamQuestionFilter", () =>
    getQuestionByFilter(examId, order)
  );
};

const getListExam = async () => {
  const res = await fetch(`${DOMAIN_API}/api/exam`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  return res.json();
};

export const getAllExam = async (page: number) => {
  const response = await fetch(`${DOMAIN_API}/api/exam/admin?page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const getMyExam = async (examId: number) => {
  const res = await fetch(`${DOMAIN_API}/api/exam/${examId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  return res.json();
};

const getQuestion = async (questionId: number) => {
  const response = await fetch(
    `${DOMAIN_API}/api/exam/question/${questionId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
      },
    }
  );
  return response.json();
};

// http://localhost:8080/api/exam/question?exam=2&order=1

const getQuestionByFilter = async (examId: number, order: number) => {
  const response = await fetch(
    `${DOMAIN_API}/api/exam/question?exam=${examId}&order=${order}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
      },
    }
  );
  return response.json();
};
