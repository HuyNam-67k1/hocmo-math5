import React from "react";
import Link from "@/components/atoms/link";
import { ROUTES } from "@/utils/constans";
import Image from "next/image";
import LDBCoursesGoToLDB from "../LDBCourses/LDBCoursesGoToLDB";
import AccountAuth from "./AccountAuth";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const SimpleLoginButton = ({ user }: { user?: boolean }) => {
  return (
    <div>
      {!user && (
        <div className="flex gap-4">
          <button
            className="h-10 text-[16px] text-white font-semibold p-[8px_16px] relative border border-[#219B67] rounded-lg overflow-hidden bg-[#219b67]"
            onClick={async () => {
              window.location.href = `${ROUTES.AUTHEN}`;
            }}
          >
            Đăng nhập
          </button>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getUser = window.localStorage.getItem("user");
  const users = JSON.parse(getUser || "{}");

  const checkUser = () => {
    if (users?.id) {
      return true;
    }
    return false;
  };

  const user = checkUser();
  return (
    <div className="h-[64px]">
      <div className="fixed top-0 left-0 right-0 h-[64px] w-full z-[11] bg-white px-0 shadow-xl">
        <div className="flex h-[56px] items-center mx-0">
          <div
            className="cursor-pointer"
            onClick={() => router.push(ROUTES.HOME)}
          >
            {pathname === ROUTES.ADMIN ? (
              <Link href={ROUTES.HOME}>
                <Image
                  src="/images/logo-admin.png"
                  alt="logo"
                  width={110}
                  height={30}
                  className="w-[110px] h-auto ml-12 mt-2"
                />
              </Link>
            ) : (
              <Image
                src="/images/logo-hoc-mo-1.png"
                loading="eager"
                alt="logo"
                width={140}
                height={140}
                className="w-[140px] h-[140px] ml-10 mt-4"
              />
            )}
          </div>

          {pathname !== ROUTES.ADMIN && (
            <div className="flex gap-14 font-medium ml-[110px] mt-2">
              <div
                className={clsx(
                  "hover:text-[#219b67] focus:text-[#3a8363] focus:font-bold cursor-pointer hover:underline-offset-8 hover:underline",
                  {
                    "text-[#219b67] font-bold underline-offset-8	underline":
                      pathname === ROUTES.COURSE ||
                      pathname ===
                        `${ROUTES.COURSE}${ROUTES.CURRICULUM_DETAIL}`,
                  }
                )}
                onClick={() => {
                  router.push(ROUTES.COURSE);
                }}
              >
                Khoá học
              </div>
              <div
                className={clsx(
                  "hover:text-[#219b67] hover:border-b-3 focus:text-[#3a8363] cursor-pointer focus:font-bold hover:underline-offset-8 hover:underline",
                  {
                    "text-[#219b67] font-bold underline-offset-8 underline":
                      pathname === ROUTES.TEST_BANK ||
                      pathname ===
                        `${ROUTES.TEST_BANK}${ROUTES.TEST_COMPLETE}` ||
                      pathname === `${ROUTES.TEST_BANK}${ROUTES.TEST_RESULT}`,
                  }
                )}
                onClick={() => {
                  router.push(ROUTES.TEST_BANK);
                }}
              >
                Luyện đề
              </div>
              <div
                className={clsx(
                  "hover:text-[#219b67] hover:border-b-3 focus:text-[#3a8363] cursor-pointer focus:font-bold hover:underline-offset-8 hover:underline",
                  {
                    "text-[#219b67] font-bold underline-offset-8 underline":
                      pathname === ROUTES.ABOUT,
                  }
                )}
                onClick={() => {
                  router.push(ROUTES.ABOUT);
                }}
              >
                Giới thiệu
              </div>
            </div>
          )}

          <div className="flex items-center justify-end flex-auto text-justify mr-12 gap-8 mt-2">
            {pathname !== ROUTES.ADMIN && <LDBCoursesGoToLDB user={user} />}
            <SimpleLoginButton user={user} />
            {user && <AccountAuth />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
