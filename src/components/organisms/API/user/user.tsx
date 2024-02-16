import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

export const getAllUser = async (page: number) => {
  const response = await fetch(`${DOMAIN_API}/api/user?page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const deleteUser = async (id: number) => {
  const response = await fetch(`${DOMAIN_API}/api/user/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
