"use client";

import { useState } from "react";
import clsx from "clsx";
import { styled } from "marathon-design-system";
import { Icon } from "@/components/Icon";
import { ListE } from "@/utils/constans";

const rotateDotCss = [
  "rotate-0",
  "rotate-45",
  "rotate-90",
  "rotate-[140deg]",
  "-rotate-[140deg]",
  "-rotate-90",
  "-rotate-45",
];

const rotateTitleCss = [
  "rotate-0",
  "-rotate-45",
  "-rotate-90",
  "-rotate-[140deg]",
  "rotate-[140deg]",
  "rotate-90",
  "rotate-45",
];

const titlePositionStyle = [
  "",
  "lg:w-[90px] lg:top-[-30px] right-0 bottom-0 lg:left-[24px] lg:h-[26px] w-[62px] top-[-20px] left-[20px] h-[18px]",
  "lg:w-[90px] lg:top-[-44px] right-0 bottom-0 lg:left-[-18px] lg:h-[26px] w-[62px] top-[-34px] left-[-10px] h-[18px]",
  "lg:w-[90px] lg:top-[-26px] right-0 bottom-0 lg:left-[-60px] lg:h-[26px] w-[62px] top-[-20px] left-[-46px] h-[18px]",
  "lg:w-[110px] lg:top-[-25px] right-0 bottom-0 lg:left-[12px] lg:h-[26px] w-[70px] top-[-20px] left-[20px] h-[18px]",
  "lg:w-[80px] lg:top-[-34px] right-0 bottom-0 lg:left-[-18px] lg:h-[26px] w-[62px] top-[-20px] left-[-12px] h-[18px]",
  "lg:w-[90px] lg:top-[-32px] right-0 bottom-0 lg:left-[-60px] lg:h-[26px] w-[62px] top-[-20px] left-[-44px] h-[18px]",
];

const DotContainerStyled = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 10px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    border: 1px solid #219b67;
  }
  &.active {
    width: 44px;
    height: 44px;
    padding: 10px;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      padding: 10px;
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      border: 10px solid rgba(33, 155, 103, 0.2);
    }
  }
`;

function Dot({ setActive, index, active }: any) {
  if (index === 0) {
    return (
      <Icon
        onMouseOver={() => setActive(index)}
        onClick={() => setActive(index)}
        onTouchEnd={() => setActive(index)}
        type="profile"
        className="rounded-full overflow-hidden"
        size={"xlarge"}
      />
    );
  }

  return (
    <DotContainerStyled
      onMouseOver={() => setActive(index)}
      onClick={() => setActive(index)}
      onTouchEnd={() => setActive(index)}
      className={`rounded-full ${active && "active"}`}
    >
      <div className="lg:p-1 p-[2px] bg-white w-5 h-5">
        <div className="rounded-full bg-[#07385C] w-4 h-4" />
      </div>
    </DotContainerStyled>
  );
}

function Cycle({ items }: { items: { title: string; content: string }[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <div className="rounded-full border-[#07385C] border-2 lg:w-[324px] lg:h-[324px] w-[200px] h-[200px] flex items-center justify-center lg:p-[60px] p-4 relative">
        <div className="w-full text-center">
          <p className="lg:text-2xl text-xl text-[#07385C] font-semibold mb-4">
            {items[activeIndex].title}
          </p>
          <p className="lg:text-base text-sm text-[#424242]">
            {items[activeIndex].content}
          </p>
        </div>
        {items.map(
          (item: { title: string; content: string }, index: number) => {
            return (
              <span
                key={index}
                className={clsx(
                  "lg:h-[184px] h-[120px] absolute lg:top-[-22px] top-[-20px] bottom-0 origin-bottom",
                  rotateDotCss[index]
                )}
              >
                <div className="relative">
                  <Dot
                    setActive={setActiveIndex}
                    index={index}
                    active={index === activeIndex}
                  />
                  {index !== 0 && (
                    <span
                      className={clsx(
                        "absolute inset-0 lg:text-base text-xs lg:h-[26px] h-[18px] text-gray-900",
                        rotateTitleCss[index],
                        titlePositionStyle[index]
                      )}
                    >
                      {item.title}
                    </span>
                  )}
                </div>
              </span>
            );
          }
        )}
      </div>
    </>
  );
}

function LearningMethod() {
  return (
    <div className=" py-[32px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
        <div className={"lg:pt-[97px] pt-0"}>
          <p className="lg:text-[32px] leading-[48px] text-2xl text-[#07375C] mb-4 lg:text-left text-center font-semibold lg:leading-[40px]]">
            7 phương pháp đảm bảo học tốt Toán học <br /> của{" "}
            <span className="text-[#219B67]">HỌC MỞ</span>
          </p>
          <p className="text-gray-400 lg:text-left text-center text-xl">
            Mô hình học tập dựa trên triết lý học tập trải nghiệm và chu trình
            khép kín tuần hoàn, giúp học sinh học tập hiệu quả đối với từng kiến
            thức nhỏ tới chủ điểm lớn. Kiến thức được luyện tập đầy đủ thông qua
            các chu kỳ học tập, giúp học sinh xây dựng được nền tảng vững chắc
            và kỹ năng vận dụng cao
          </p>
        </div>
        <div className="flex justify-center items-center p-[60px]">
          <Cycle items={ListE} />
        </div>
      </div>
    </div>
  );
}

export default LearningMethod;
