import { ROUTES } from "@/utils/constans";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem] bg-white !rounded-3xl">
      <div className="flex flex-col justify-between h-full">
        <div className="bg-white rounded-md py-6 px-4 text-xl font-medium">
          <Link href={ROUTES.TEST_BANK} legacyBehavior passHref>
            <a
              className={clsx(
                "block rounded-lg px-4 py-2 mb-2 mt-2",
                pathname === ROUTES.TEST_BANK
                  ? "bg-[#E9F5F0] text-[#219B67] text-xl font-bold"
                  : "bg-white text-[#212121] cursor-pointer"
              )}
            >
              Danh sách đề thi
            </a>
          </Link>
          <Link
            href={`${ROUTES.TEST_BANK}${ROUTES.TEST_COMPLETE}`}
            legacyBehavior
            passHref
          >
            <a
              className={clsx(
                "block rounded-lg px-4 py-2 mb-2 mt-5",
                pathname === `${ROUTES.TEST_BANK}${ROUTES.TEST_COMPLETE}`
                  ? "bg-[#E9F5F0] text-[#219B67] text-xl font-bold"
                  : "bg-white text-[#212121] cursor-pointer"
              )}
            >
              Đề thi đã hoàn thành
            </a>
          </Link>
          <Link
            href={`${ROUTES.TEST_BANK}${ROUTES.TEST_RESULT}`}
            legacyBehavior
            passHref
          >
            <a
              className={clsx(
                "block rounded-lg px-4 py-2 mb-2 mt-5",
                pathname === `${ROUTES.TEST_BANK}${ROUTES.TEST_RESULT}`
                  ? "bg-[#E9F5F0] text-[#219B67] text-xl font-bold"
                  : "bg-white text-[#212121] cursor-pointer"
              )}
            >
              Kết quả luyện đề
            </a>
          </Link>
        </div>
        <div className="mt-10 bg-white pb-16">
          <Image
            src={"/images/test-bank-home-decor.png"}
            width={282}
            height={233}
            alt="test-bank"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
