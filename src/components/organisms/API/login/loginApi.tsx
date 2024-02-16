import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

export interface LoginProps {
  email: string;
  password: string;
}

export const useLogin = () =>
  useMutation((loginForm: any) => login({ ...loginForm }));
const login = async (loginForm: LoginProps) => {
  const body = {
    ...loginForm,
  };

  const response = await fetch(`${DOMAIN_API}/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
