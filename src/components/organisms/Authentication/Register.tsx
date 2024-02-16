"use client";

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
import { ROUTES } from "@/utils/constans";
import { useRegister } from "../API/register/register";
import { sendOTP } from "../API/verify-email/verifyEmailApi";
import { toast } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { result } from "lodash";
import { constants } from "buffer";
import React from "react";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();

function validatePhone(phone: string) {
  if (/((\+[0-9]{2})|0)+([0-9]{9})\b/g.test(phone)) {
    return true;
  }
  return false;
}

function validateMail(mail: string) {
  if (/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/g.test(mail)) {
    return true;
  }
  return false;
}

function PhoneForm() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState({
    phone: "",
    email: "",
    name: "",
    password: "",
    checked: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  const { mutateAsync: register } = useRegister();

  const router = useRouter();

  const onClickSubmit = () => {
    if (phone === "") {
      setMessage({ ...message, phone: "Vui lòng nhập số điện thoại" });
      return;
    }

    if (!validatePhone(phone)) {
      setMessage({ ...message, phone: "Vui lòng kiểm tra số điện thoại" });
      return;
    }

    if (email === "") {
      setMessage({ ...message, email: "Vui lòng nhập email" });
      return;
    }
    if (!validateMail(email)) {
      setMessage({
        ...message,
        email: "Vui lòng nhập email",
      });
      return;
    }

    if (name === "") {
      setMessage({ ...message, name: "Vui lòng nhập tên người dùng" });
      return;
    }

    if (password === "") {
      setMessage({ ...message, password: "Vui lòng nhập mật khẩu" });
      return;
    }

    if (!checked) {
      setMessage({
        ...message,
        checked: "Vui lòng đọc và đồng ý với các điều khoản!",
      });
      return;
    }

    // validate fullname and checkbox
    if (isNewUser === true) {
      if (name === "") {
        setMessage({ ...message, name: "Vui lòng nhập tên người dùng" });
        return;
      }
      if (!checked) {
        setMessage({
          ...message,
          checked: "Vui lòng đọc và đồng ý với các điều khoản!",
        });
        return;
      }
    }

    if (!checked) {
      setMessage({
        ...message,
        checked: "Vui lòng đọc và đồng ý với các điều khoản!",
      });
      return;
    }

    handleRegister({ name, phone, email, password });
  };
  const handleRegister = async (data: any) => {
    const rs = await register({ ...data });
    const httprespone = JSON.parse(JSON.stringify(rs));
    if (httprespone.code == 200) {
      const rs2 = await sendOTP(httprespone.data.id);
      localStorage.setItem("user", JSON.stringify(rs.data));
      router.push(ROUTES.OTP);
      router.refresh();
    } else {
      alert("Đăng ký thất bại, email này đã được sử dụng !");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const ele = document.getElementById("login-phone-input");

      if (ele) {
        ele.focus();
        ele.blur();
        ele.focus();
      }
    }, 200);
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onClickSubmit();
      }}
    >
      <Input
        id={"login-phone-input"}
        inputSize="xl"
        label="Nhập số điện thoại"
        className="mt-6 w-full"
        name={"phone"}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPhone(e.target.value);
          setMessage({ ...message, phone: "" });
        }}
        value={phone}
        inputState={message.phone !== "" ? "error" : "default"}
        message={message.phone}
        type="tel"
        pattern="((\+[0-9]{2})|0)+([0-9]{9})\b"
        allowClear
        autoFocus
      />
      <Input
        inputSize="xl"
        label="Nhập email"
        className="mt-4 w-full"
        name={"mail"}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
          setMessage({ ...message, email: "" });
        }}
        value={email}
        inputState={message.email !== "" ? "error" : "default"}
        message={message.email}
        type="mail"
        allowClear
      />
      <Input
        inputSize="xl"
        label="Nhập tên người dùng"
        className="mt-4 w-full"
        name={"userName"}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
          setMessage({ ...message, name: "" });
        }}
        value={name}
        inputState={message.name !== "" ? "error" : "default"}
        message={message.name}
        type="text"
        allowClear
      />
      <Input
        inputSize="xl"
        label="Nhập mật khẩu"
        className="mt-4 w-full"
        name={"pass"}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setpassword(e.target.value);
          setMessage({ ...message, password: "" });
        }}
        value={password}
        inputState={message.password !== "" ? "error" : "default"}
        message={message.password}
        type="password"
        allowClear
      />
      <div className="flex cursor-pointer">
        <Checkbox
          checked={checked}
          state={message.checked !== "" ? "error" : "default"}
          onChange={(isChecked) => {
            setMessage({ ...message, checked: "" });
            setChecked(isChecked);
          }}
        />
        <span className="text-[#212121] ml-2">
          Bạn đã đọc và chấp nhận{" "}
          <a className="text-[#219b67]" href="/regulations" target="_blank">
            quy định và chính sách
          </a>
          ,{" "}
          <a
            className="text-[#219b67]"
            href="/terms-and-conditions"
            target="_blank"
          >
            điều khoản sử dụng
          </a>{" "}
          và{" "}
          <a className="text-[#219b67]" href="/privacy" target="_blank">
            bảo mật thông tin cá nhân
          </a>{" "}
          với Học Mở.
        </span>
      </div>
      <Typography color="red" type={"p-3"} className="danky">
        {message.checked}
      </Typography>
      <div className="flex justify-center w-full mt-10">
        <Button
          buttonType="primary"
          className="w-full"
          id="hj-phone-submit-button"
        >
          Đăng ký
        </Button>
      </div>
    </form>
  );
}

function OtpForm({
  phone,
  onFinish,
  otpResult,
  clearInputs,
  onClearDones,
}: {
  phone: string;
  onFinish: (otp: string) => void;
  captchaRef: any;
  otpResult: string;
  onResendDone: () => void;
  clearInputs: boolean;
  onClearDones: () => void;
}) {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (clearInputs) {
      setOtp("");
      onClearDones();
    }
  }, [clearInputs]);

  return (
    <div>
      <Typography as="p" type="p-2" weight="semibold" className="text-center">
        Xác minh OTP
      </Typography>
      <Typography
        as="p"
        type="p-2"
        color={theme.colors["neutral"]}
        className="mt-6"
      >
        Nhập mã 6 chữ số được gửi đến số điện thoại <br />
        <span className="text-[#212121]">{phone}</span>
      </Typography>
      <OtpInput
        length={6}
        className={"mt-4"}
        onChange={(value) => {
          setOtp(value);

          if (value.length === 6) {
            onFinish(value);

            // @ts-expect-error xxxx
            if (window.hj) {
              // @ts-expect-error xxxx
              window.hj("event", "otp-filled");
            }
          }
        }}
        value={otp}
      />
      <span className="mt-4 text-[#EF4444]">{otpResult}</span>
    </div>
  );
}

function RegisterFlow() {
  const captchaRef = useRef<any>(null);

  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");

  const [otpResult, setOtpResult] = useState("");

  const [clearInput, setClearInput] = useState(false);

  const onFinish = useCallback(async (otp: string) => {}, []);

  return (
    <QueryClientProvider client={queryClient}>
      {<PhoneForm />}
    </QueryClientProvider>
  );
}

export default RegisterFlow;
