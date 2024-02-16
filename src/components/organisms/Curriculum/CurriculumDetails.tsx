"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Button, CurvedLine, Icons } from "marathon-design-system";
import { Icon } from "@/components/Icon";
import Accordion from "@/components/molecules/Accordion/Accordion";
import { DATA_TOAN_5_DAI_SO, ROUTES } from "@/utils/constans";
import { useRouter } from "next/navigation";

const SectionHeader = (
  props: PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    extraText?: string;
    isIcon?: boolean;
  }>
) => {
  const { isActive, children, extraText = "", className } = props;
  const textColor = isActive ? "#219B67" : "#424242";
  const iconRotate = isActive ? "rotate-180" : "rotate-0";

  return (
    <div
      className={clsx(
        "flex justify-between bg-[#EDF7FF] p-6 items-center rounded-lg mt-2",
        className
      )}
    >
      <div
        className={`flex items-center text-[${textColor}] lg:text-base text-sm lg:pr-1`}
      >
        {(props.isIcon ?? true) && (
          <Icon
            type="downArrow"
            className={`mr-4 rotate-180 ${iconRotate} transition duration-300`}
            color={textColor}
            size={16}
          />
        )}
        {children}
      </div>
      <div className="text-[#9B9B9B] lg:text-xl  text-lg whitespace-nowrap pl-4 border-l border-[#e3e2e2]">
        {extraText}
      </div>
    </div>
  );
};

const CurriculumDetails = () => {
  const router = useRouter();
  return (
    <div className="pb-[30px] xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 grid grid-cols-1">
          <div className="rounded-t-2xl bg-[#219b67] px-4 py-6">
            <h2 className="text-white text-2xl leading-9 font-semibold">
              Giáo trình môn Toán Lớp 5
              <br />
            </h2>
          </div>
          <div className="rounded-b-2xl bg-[#fafafa] p-6">
            {(DATA_TOAN_5_DAI_SO ?? []).map((item, index) => (
              <Accordion
                key={index}
                initActive={false}
                header={
                  <SectionHeader
                    isActive={true}
                    extraText={`(${item?.lessons?.length} Bài)`}
                  >
                    <b className="text-xl lg:text-2xl leading-9">
                      {item.title}
                    </b>
                  </SectionHeader>
                }
                body={(item.lessons ?? []).map((bai, index) => (
                  <div
                    className="py-3 px-[60px] border-b border-[#dfdfdf] last:border-none relative text-2xl font-medium"
                    key={index}
                  >
                    {bai.bai}
                  </div>
                ))}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 bg-[#fafafa] lg:h-[420px] border rounded-3xl lg:mt-0 mt-6">
          <div className="flex justify-center">
            <CurvedLine
              size="md"
              color="#28A06D"
              className="uppercase font-semibold lg:text-[28px] text-[24px] inline-block text-[#07385c] lg:max-w-[800px] mt-10"
            >
              Toán Học <span className="text-[#219B67] font-medium">Lớp 5</span>
            </CurvedLine>
          </div>
          <div className="flex justify-center py-2">
            <Button
              buttonType="primary"
              className="m-[8px] text-lg lg:text-xl mt-[40px]"
              onClick={() => {
                window.open(ROUTES.LDB);
              }}
            >
              Mở ra học ngay
            </Button>
          </div>
          <div className="block !justify-center px-[55px] pt-6 text-2xl">
            <span className="flex m-2 gap-3">
              <Icons.GraduateSvg width={20} height={20} className="mt-1" />
              Ôn tập hiểu quả
            </span>
            <span className="flex m-2 gap-3">
              <Icons.Workplace width={20} height={20} className="mt-1" />
              Nâng cao kiến thức
            </span>
            <span className="flex m-2 gap-3">
              <Icons.Launch width={20} height={20} className="mt-1" />
              Học mọi lúc, mọi nơi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumDetails;
