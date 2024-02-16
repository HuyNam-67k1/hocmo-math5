import { ROUTES } from "@/utils/constans";
import Image from "next/image";
import Link from "next/link";

const HeaderTestBank = () => {
  return (
    <>
      <div className="bg-white h-[65px]">
        <div className="h-[64px]">
          <div className=" top-0 left-0 right-0 h-[64px] w-full z-[11] bg-white px-0">
            <div className="flex h-[56px] items-center mx-0">
              <Link href={ROUTES.HOME}>
                <Image
                  src="/images/logo-hoc-mo-1.png"
                  loading="eager"
                  alt="logo"
                  width={140}
                  height={40}
                  className="w-[140px] h-auto ml-10 mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTestBank;
