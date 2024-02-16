"use client";
import { Toaster, toast } from "sonner";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  OtpInput,
  Typography,
  theme,
} from "marathon-design-system";
import Countdown from "@/components/molecules/Countdown";
import { verifyEmail } from "../API/verify-email/verifyEmailApi";
import { sendOTP } from "../API/verify-email/verifyEmailApi";
import { QueryClient, QueryClientProvider } from "react-query";
import { result } from "lodash";
import { constants } from "buffer";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/constans";
import React from "react";
import { json } from "stream/consumers";

const queryClient = new QueryClient();

function validateMail(mail: string) {
  if (/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/g.test(mail)) {
    return true;
  }
  return false;
}
function OTPForm() {
  const [message, setMessage] = useState({
    otp: "",
  });
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const onClickSubmit = () => {
    if (otp === "") {
      setMessage({
        ...message,
        otp: "Vui lòng nhập mã ",
      });
      return;
    }
    const userJson = localStorage.getItem("user");
    const user = userJson !== null ? JSON.parse(userJson) : Object;
    const userId = user.id;

    handleOTP(userId, otp);
  };
  const handleOTP = async (userId: number, otp: string) => {
    const rs = await verifyEmail(userId, otp);
    const httprespone = JSON.parse(JSON.stringify(rs));
    if (httprespone.code == 200) {
      router.push(ROUTES.LDB);
      router.refresh();
    } else {
      notifyError("Mã xác thực không chính xác");
    }
  };
  const notifySuccess = () => {
    toast.success("Đã gửi lại mã OTP");
  };
  const notifyError = (message: string) => {
    toast.error(message);
  };
  const reSendOTP = async () => {
    const userJson = localStorage.getItem("user");
    const user = userJson !== null ? JSON.parse(userJson) : Object;
    const userId = user.id;
    const rs = await sendOTP(userId);
    const httprespone = JSON.parse(JSON.stringify(rs));
    if (httprespone.code == 200) {
      notifySuccess();
    } else {
      notifyError("Gửi mã OTP thất bại");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onClickSubmit();
      }}
    >
      <Toaster position="top-right" richColors></Toaster>
      <p>(Có thể sẽ mất một ít thời gian để nhận được mã)</p>
      <Input
        inputSize="xl"
        label="Nhập mã OTP "
        className="mt-4 w-full"
        name={"otp"}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setOtp(e.target.value);
          setMessage({ ...message, otp: "" });
        }}
        value={otp}
        inputState={message.otp !== "" ? "error" : "default"}
        message={message.otp}
        type="text"
        allowClear
      />
      <div className="flex cursor-pointer">
        <span className="text-[#212121] ml-2">
          <a className="text-[#219b67]" onClick={reSendOTP}>
            Gửi lại nếu bạn không nhận được mã !
          </a>
        </span>
      </div>
      <div className="flex justify-center w-full mt-10">
        <Button
          buttonType="primary"
          className="w-full"
          id="hj-phone-submit-button"
        >
          Xác thực
        </Button>
      </div>
    </form>
  );
}

function VerifyEmailFlow() {
  const captchaRef = useRef<any>(null);

  const [phone, setEmail] = useState("");

  const [clearInput, setClearInput] = useState(false);

  const onFinish = useCallback(async (otp: string) => {}, []);

  return (
    <QueryClientProvider client={queryClient}>
      {<OTPForm />}
    </QueryClientProvider>
  );
}

export default VerifyEmailFlow;
