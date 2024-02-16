"use client";

import VerifyEmailFlow from "@/components/organisms/Authentication/VerifyEmail";
import { Card, Typography } from "marathon-design-system";
import { theme } from "marathon-design-system";

function VerifyEmail() {
  return (
    <div className="pt-10 xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
      <div className="pt-[0px] mx-auto md:max-w-[614px] h-auto md:h-[571px] bg-[url('/images/login-bg.png')] p-auto mt-8 md:mt-[50px] bg-cover">
        <div className="max-w-[432px] m-auto">
          <Typography
            className="mt-2 w-full text-center"
            type={"h-2"}
            weight="semibold"
            color={theme.colors["primary"]}
            as="p"
          >
            Học Mở!!
          </Typography>
          <Typography
            className="w-full text-center"
            type={"h-4"}
            as="h4"
            weight="semibold"
            color={theme.colors["secondary-900"]}
          >
            Xác thực Email đăng ký
          </Typography>

          <Card className="mt-10">
            <Typography className="mt-2 w-full text-center" type={"p-2"}>
              Nhập mã đã được gửi đến email của bạn
            </Typography>
            <VerifyEmailFlow />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
