import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useQuery } from "react-query";

export const useHistory = () => {
  return useQuery("getHistory", getHistory);
};

export const useGetHistoryById = (id: number) => {
  return useQuery("getHistoryById", () => getHistoryById(id));
};

const getHistory = async () => {
  const res = await fetch(`${DOMAIN_API}/api/exam/history`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  return res.json();
};

export const getHistoryById = async (id: number) => {
  const res = await fetch(`${DOMAIN_API}/api/exam/history/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  return res.json();
};
