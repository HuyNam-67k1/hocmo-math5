import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { Toastify } from "@/components/atoms/Toastify";

const Header = () => {
  return (
    <header className="h-[56px] lg:h-[64px] sticky top-0 w-full z-[99] bg-white md:px-6 px-0 shadow-md">
      <div className="flex md:hidden h-full relative justify-center items-center">
        <Link href={"/"} passHref legacyBehavior>
          <picture>
            <img src={"#"} loading="eager" alt="logo" className="w-[82px]" />
          </picture>
        </Link>
      </div>

      <div className="hidden md:flex h-full mx-auto items-center">
        <Link href={"/"} passHref legacyBehavior>
          <picture>
            {" "}
            <img
              src={"#"}
              loading="eager"
              alt="logo"
              className="lg:w-[140px]"
            />
          </picture>{" "}
        </Link>
      </div>
    </header>
  );
};

interface MasterLayoutProps {
  seoContent?: string;
  className?: string;
}

const ExamLayout = ({ children }: PropsWithChildren<MasterLayoutProps>) => {
  return (
    <div className="h-auto md:h-[100vh] bg-[#fafafa]">
      <Header />

      <main className="text-sm lg:text-base text-[#424242]">{children}</main>

      <Toastify />
    </div>
  );
};

export default ExamLayout;
