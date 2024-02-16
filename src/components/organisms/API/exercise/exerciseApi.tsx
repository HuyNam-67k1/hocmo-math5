import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useQuery } from "react-query";

export const useExcercise = (checkSelectedLesson: number) => {
  return useQuery("getExcercise", () => getExcercise(checkSelectedLesson));
};

export const useDoExcercise = (
  valueText: any,
  questionId: any,
  exerciseId: any
) => {
  return useQuery("doExcercise", () =>
    doExcercise(valueText, questionId, exerciseId)
  );
};

export const getExcercise = async (checkSelectedLesson: number) => {
  const response = await fetch(
    `${DOMAIN_API}/api/exercise?lessonId=${checkSelectedLesson}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
      },
    }
  );
  return response.json();
};

export const getAllExcercise = async (page: number) => {
  const response = await fetch(
    `${DOMAIN_API}/api/exercise/admin?page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};
export const doExcercise = async (
  valueText: string,
  questionId: number,
  exerciseId: number
) => {
  const data = {
    valueText,
    questionDTO: {
      id: questionId,
    },
    exerciseDTO: {
      id: exerciseId,
    },
  };
  const response = await fetch(`${DOMAIN_API}/api/exercise/doExercise`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
