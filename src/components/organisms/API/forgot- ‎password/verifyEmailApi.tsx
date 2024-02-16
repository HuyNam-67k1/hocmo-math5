import { DOMAIN_API, TOKEN_API } from "@/utils/constans";
import { useMutation, useQuery } from "react-query";

export interface ForgotPassWordProps {
  email: string;
}

export const sendOTP = async (idUser: number) => {
  const response = await fetch(`${DOMAIN_API}/api/user/send-otp/${idUser}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  return response.json();
};

// export const forgotPassword = async (email: string) => {
//   const response = await fetch(
//     `${DOMAIN_API}/api/user/verifymail?user=${idUser}&otp=${otp}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${TOKEN_API}`,
//       },
//     }
//   );
//   return response.json();
// };
