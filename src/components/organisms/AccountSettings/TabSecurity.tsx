import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  OtpInput,
  Typography,
  theme,
} from "marathon-design-system";
import { useLogin } from "../API/login/loginApi";
import { Toaster, toast } from "sonner";
import { QueryClient, QueryClientProvider } from "react-query";
import { result } from "lodash";
import { constants } from "buffer";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/constans";
import React from "react";

const queryClient = new QueryClient();

function validateMail(mail: string) {
  if (/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/g.test(mail)) {
    return true;
  }
  return false;
}
function ChangePasswordForm() {
  const [message, setMessage] = useState({
    email: "",
    password: "",
    checked: "",
  });
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [checked, setChecked] = useState(false);
  const { mutateAsync: login } = useLogin();

  const router = useRouter();

  const [dataLogin, setDataLogin] = useState({
    token: "",
    type: "",
    name: "",
    email: "",
    avatar: "",
    idUser: 0,
  });
  const onClickSubmit = () => {
    if (email === "") {
      setMessage({
        ...message,
        email: "Vui lòng nhập email",
      });
      return;
    }
    if (!validateMail(email)) {
      setMessage({
        ...message,
        email: "Vui lòng nhập kiểm tra định dạng email",
      });
      return;
    }
    if (password === "") {
      setMessage({ ...message, password: "Vui lòng nhập mật khẩu" });
      return;
    }
    if (checked === false) {
      setMessage({
        ...message,
        checked: "Vui lòng nhấn chấp nhận các điều khoản!",
      });
      return;
    }
    handleLogin({
      email,
      password,
    });
  };
  const handleLogin = async (data: any) => {
    const rs = await login({ ...data });
    const user = JSON.parse(JSON.stringify(rs));
    localStorage.setItem("user", JSON.stringify(rs));
    if (user.token != null) {
      router.push(ROUTES.LDB);
      router.refresh();
    } else {
      <p>Error Message</p>;
      notify();
    }
  };

  const notify = () => {
    toast.error("Thông tin đăng nhập không chính xác");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onClickSubmit();
      }}
    >
      <Toaster position="top-right" richColors></Toaster>
      <div className="p-4">
        <Input
          inputSize="xl"
          label="Nhập mật khẩu hiện tại"
          className="mt-4 w-1/2"
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

        <Input
          inputSize="xl"
          label="Nhập mật khẩu mới"
          className="mt-4 w-1/2"
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
        <Input
          inputSize="xl"
          label="Nhập lại mật khẩu để xác nhận"
          className="mt-4 w-1/2"
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
          </span>
        </div>
        <Typography color="red" type={"p-3"} className="danky">
          {message.checked}
        </Typography>
        <div className="flex  w-full mt-10">
          <Button
            buttonType="primary"
            className="w-1/2 p-16"
            id="hj-phone-submit-button"
          >
            Thay đổi mật khẩu
          </Button>
        </div>
      </div>
      <style jsx>{`
        .dangky {
          margin-top: 30px;
        }
        .href {
          margin-left: 5px;
        }
      `}</style>
    </form>
  );
}

function ChangePassWordFlow() {
  const captchaRef = useRef<any>(null);

  const [phone, setEmail] = useState("");

  const [clearInput, setClearInput] = useState(false);

  const onFinish = useCallback(async (otp: string) => {}, []);

  return (
    <QueryClientProvider client={queryClient}>
      {<ChangePasswordForm />}
    </QueryClientProvider>
  );
}
export default ChangePassWordFlow;
