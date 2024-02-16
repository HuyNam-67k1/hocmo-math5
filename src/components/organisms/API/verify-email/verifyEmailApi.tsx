import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

export interface OTPProps {
  idUser: number;
}

export interface VarifyEmailProps {
  idUser: number;
  otp: string;
}
export const useSendOTP = (idUser: number) => {
  return useQuery("sendOTP", () => sendOTP(idUser));
};
export const useVerifyEmail = (idUser: number, otp: string) => {
  return useQuery("verifyEmail", () => verifyEmail(idUser, otp));
};
export const sendOTP = async (idUser: number) => {
  const response = await fetch(`${DOMAIN_API}/api/user/send-otp/${idUser}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const verifyEmail = async (idUser: number, otp: string) => {
  const response = await fetch(
    `${DOMAIN_API}/api/user/verifymail?user=${idUser}&otp=${otp}`,
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
