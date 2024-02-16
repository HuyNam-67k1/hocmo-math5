"use client";

import { Icons } from "marathon-design-system";
import ClassTypeCard from "@/components/molecules/Card/ClassTypeCard";
import type { TClassTypeCard } from "@/components/molecules/Card/ClassTypeCard";

const classTypes: Array<TClassTypeCard> = [
  {
    title: "Học Với video",
    desc: (
      <div className="leading-8 text-lg">
        <p>Giáo viên dạy tốt. Bài học chất lượng. Linh hoạt thời gian</p>
      </div>
    ),
    icon: <Icons.BooksFill width={48} height={48} />,
    link: "#",
  },
  {
    title: "Học theo từng đề luyện tập",
    desc: (
      <div className="leading-8 text-lg">
        <p>Kiểm tra kiến thức học tập để giúp học viên ôn tập sau mỗi đề</p>
      </div>
    ),
    icon: <Icons.BagFill width={48} height={48} />,
    link: "#",
  },
  {
    title: "Học qua từng câu hỏi trắc nghiệm",
    desc: (
      <div className="leading-8 text-lg">
        <p>Mỗi câu hỏi là một mục kiến thức giúp đánh giá khả năng hiểu bài</p>
      </div>
    ),
    icon: <Icons.IdeaFill width={48} height={48} />,
    link: "#",
  },
];

const HomeLearnWithMRT = () => (
  <div className="p-10 lg:py-[60px] xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem] my-10">
    <div className="text-center text-[#07375C] font-semibold text-[40px]">
      Học với <span className="text-[#219b67]">Học Mở</span>
    </div>
    <div className="text-center mt-4 text-2xl text-[#777777]">
      Với các phương thức học mới mẻ, Học Mở đảm bảo đáp ứng <br /> nhu cầu học
      tập để giúp học viên đạt chất lượng cao trong thời gian ngắn nhất
    </div>
    <div className="mt-10 lg:mt-15 w-[100%] max-w-[977px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8">
      {classTypes.map((item, index) => (
        <ClassTypeCard key={index} {...item} />
      ))}
    </div>
  </div>
);

export default HomeLearnWithMRT;
