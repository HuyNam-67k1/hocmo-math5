import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

export interface RegisterProps {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export const useRegister = () =>
  useMutation((registerForm: any) => register({ ...registerForm }));

export const register = async (registerForm: RegisterProps) => {
  const body = {
    ...registerForm,
  };

  const response = await fetch(`${DOMAIN_API}/api/user/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

export const create = async (data: any) => {
  const body = {
    data,
  };

  const response = await fetch(`${DOMAIN_API}/api/user/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
