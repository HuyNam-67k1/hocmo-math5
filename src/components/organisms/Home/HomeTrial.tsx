"use client";

import { useCallback } from "react";
import { Icons, Button } from "marathon-design-system";
import Image from "../../atoms/Image";
import scrollToId from "@/utils/scrollToId";
import { ROUTES } from "@/utils/constans";
import { useRouter } from "next/navigation";

function HomeTrial() {
  const router = useRouter();

  return (
    <div className="xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="pb-10">
          <div className="mb-4 lg:mb-12 text-[40px] font-semibold text-[#07375C]">
            Học Thử <span className="text-[#28A06D]">Trải Nghiệm Thật</span>
          </div>
          <ul className="lg:mb-10 mb-4 color-[#242424]">
            <li className={"lg:text-xl text-base font-normal mb-4"}>
              <Icons.Star
                fill="#EE4900"
                width={20}
                height={20}
                className="mr-2 inline-block"
              />
              Học sinh đang có mong muốn trải nghiệm khoá học
            </li>
            <li className={"lg:text-xl text-base font-normal mb-4"}>
              <Icons.Star
                fill="#EE4900"
                width={20}
                height={20}
                className="mr-2 inline-block"
              />
              Học sinh có học lực Khá mong muốn tăng điểm lên 8+{" "}
            </li>
            <li className={"lg:text-xl text-base font-normal mb-4"}>
              <Icons.Star
                fill="#EE4900"
                width={20}
                height={20}
                className="mr-2 inline-block"
              />
              Phụ huynh mong muốn một nơi học tập tuyệt vời cho bé
            </li>
          </ul>

          <Button
            buttonType="primary"
            onClick={() => {
              router.push(`${ROUTES.COURSE}${ROUTES.CURRICULUM_DETAIL}`);
            }}
          >
            Tìm hiểu ngay
          </Button>
        </div>
        <div className="pb-10 w-full max-w-[600px] mx-auto">
          <Image
            src={"/images/home-hoc-thu.png"}
            alt="hoc-thu"
            ratio={0.6883}
            fallback="/images/marathon-default.png"
            className="rounded-2xl max-h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeTrial;
