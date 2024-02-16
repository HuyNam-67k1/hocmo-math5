"use client";

import { ROUTES } from "@/utils/constans";
import { Button } from "marathon-design-system";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeBannerTop = () => {
  const router = useRouter();

  return (
    <div className="pt-[20px] lg:pt-[60px] xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full text-center md:text-left">
          <h1>
            <div className="lg:text-[48px] sm:text-[16px] font-semibold text-[#28a66d]">
              Học Mở
            </div>
            <br />
            <div className="block leading-normal text-[#07375C] text-[30px] font-semibold">
              WEBSITE GIÁO DỤC <br />
              HỖ TRỢ ÔN TẬP KIẾN THỨC
              <br />
              TOÁN CHO HỌC SINH
              <span className="text-[#219B67]"> LỚP 5</span>
            </div>
          </h1>
          <div className="block mt-2 mb-2 text-[#9E9E9E] text-[20px] leading-6">
            Website học online Học Mở cải thiện và nâng cao học lực
            <br /> Toán học cho các bạn học sinh lớp 5 với nhiều loại bài học
            <br />
            và bài tập chất lượng.
          </div>
          <div className="mt-4">
            <Button
              buttonType="primary"
              className="mt-4 mx-auto md:mx-px"
              onClick={() => {
                window.location.assign("#");
                router.push(`${ROUTES.ABOUT}`);
              }}
            >
              Tìm hiểu thông tin
            </Button>
          </div>
        </div>
        <Image
          src="/images/banner-home.png"
          alt="image-32"
          height={450}
          width={700}
          className="rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default HomeBannerTop;
