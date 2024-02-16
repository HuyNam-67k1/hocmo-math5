import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

export const getAllQuestion = async (page: number) => {
  const response = await fetch(`${DOMAIN_API}/api/question?page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getQuestionById = async (id: number) => {
  const response = await fetch(`${DOMAIN_API}/api/question/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const deleteQuestionById = async (id: number) => {
  const response = await fetch(`${DOMAIN_API}/api/question/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getUpdateById = async (id: number) => {
  const response = await fetch(`${DOMAIN_API}/api/question/=${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const createQuestion = async (data: any) => {
  const body = {
    ...data,
  };
  const response = await fetch(`${DOMAIN_API}/api/question`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
