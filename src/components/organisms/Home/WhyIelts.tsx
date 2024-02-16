"use client";

import { Icon } from "@/components/Icon";
import { resons } from "@/utils/constans";

function ItemComponent({ item }: any) {
  return (
    <div className="bg-[#ffffff] rounded-md lg:p-4 p-2 text-center">
      <Icon type={item.icon} className="hidden md:inline-flex" size={40} />
      <p className="text-xl text-[#07385C] font-semibold mt-6">{item.title}</p>
      <p className="text-[#424242] mt-4">{item.content}</p>
    </div>
  );
}

function WhyIeltsBlock() {
  return (
    <div className="lg:py-[64px] py-10 xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
      <p className="lg:text-4xl text-2xl text-[#07375C] lg:mb-10 mb-6 lg:text-left text-center font-semibold">
        Vì sao nên học toán ở&nbsp;
        <span className="text-[#219B67]">Học Mở</span>
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2 pb-10">
        {resons.map((item, index) => {
          return <ItemComponent item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default WhyIeltsBlock;
